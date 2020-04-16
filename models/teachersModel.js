const fs = require("fs")
const pool = require("../connection/config")

class teachersModels {
    static showTeachers(callback) {

        const query = `
            SELECT * FROM teachers
            ORDER BY id ASC
        `

        pool
        .query(query)
        .then(res => {
            callback(null, res.rows)
        })
        .catch(err => {
            callback(err, null)
        })
    }
    
    static findTeacherById(id, callback) {

        const query = `
            SELECT * FROM teachers
            WHERE id = $1
        `
        // console.log(id)
        let params = [id]
        pool
        .query(query, params)
        .then(res => {
            callback(null, res.rows)
        })
        .catch(err => {
            callback(err, null)
        })
    }
}

module.exports = teachersModels