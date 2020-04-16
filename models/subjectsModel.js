const fs = require("fs")
const pool = require("../connection/config")


class subjectsModels {
    static showSubjects(callback) {

        const query = `
            SELECT * FROM subjects
            ORDER BY id ASC
        `

        pool
        .query(query)
        .then(res => callback(null, res.rows))
        .catch(err => callback(err, null))
    }
    
    

    static findSubjectById(id, callback) {

        const query = `
            SELECT * FROM subjects
            WHERE id = $1
        `
        // console.log(id)
        let params = [id]
        pool
        .query(query, params)
        .then(res => callback(null, res.rows))
        .catch(err => callback(err, null))
    }
    
}


module.exports = subjectsModels