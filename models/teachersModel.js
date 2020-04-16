const pool = require('../config/connection')
const fs = require('fs')

class TeachersModel{
    static getteachers(callback) {
        const querySelect = `SELECT * FROM teachers ORDER BY id asc `
        pool.query(querySelect, (err, data) => {
            if(err){
                callback(err, null)
            } else {
                callback(null, data.rows)
            }
        })
    }

    static read(callback) {
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if(err) {
                callback(err)
            } else {
                callback(null, JSON.parse(data))
            }
        })
    }

    static idTeachers(id, callback) {
        const queryId = `SELECT * FROM teachers where id = '${id}'`
        pool.query(queryId, (err, res) => {
            if(err) {
                callback(err)
            } else {
                callback(null, res.rows)
            }
        })
    }
}

module.exports = TeachersModel