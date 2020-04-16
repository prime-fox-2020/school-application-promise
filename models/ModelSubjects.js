const pool = require('../config/connection')

class ModelSubjects{
    static getSubjects(callback){
        pool.query(`SELECT * FROM subjects ORDER BY id ASC`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }

    static getSubjectId(id, callback){
        pool.query(`SELECT * FROM subjects WHERE id = ${id}`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
   
}

module.exports = ModelSubjects;