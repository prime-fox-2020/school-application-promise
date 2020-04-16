const pool = require('../config/connection')
const fs = require('fs')

class SubjectsModel{
    static getSubjects(callback) {
        const querySelect = `SELECT * FROM subjects ORDER BY id asc `
        pool.query(querySelect, (err, data) => {
            if(err){
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
    }

    static read(callback) {
        fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
            if(err) {
                callback(err)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static idSubjects(id, callback) {
        const queryId = `SELECT * FROM subjects where id = '${id}'`
        pool.query(queryId, (err, res) => {
            if(err) {
                callback(err)
            } else {
                callback(null, res.rows)
            }
        }) 
    }
}

module.exports = SubjectsModel