// const fs = require('fs')
const pool = require('../config/connection')
class SubjectModel {
    constructor(id, subject_name){
        this.id = id
        this.subject_name = subject_name
    }
    
    static getSubjects(callback){
        return new Promise((res, rej) => {
            pool.query(`SELECT * FROM subjects ORDER BY id ASC`)
            .then(data => {
                let result = []
                for (let i = 0; i < data.rows.length; i++) {
                    result.push(new SubjectModel(data.rows[i].id, data.rows[i].subject_name))
                }
                res(result)
            })
            .then(err => {
                rej(err)
            })
        })
    }

    static getId(id, callback){
        return new Promise((res, rej) => {
            pool.query(`SELECT * FROM subjects WHERE id = ${id}`)
            .then(data => {
                let result = []
                for (let i = 0; i < data.rows.length; i++) {
                    result.push(new SubjectModel(data.rows[i].id, data.rows[i].subject_name))
                }
                res(result)
            })
            .catch(err => {
                rej(err)
            })
        })
    }
}

module.exports = SubjectModel