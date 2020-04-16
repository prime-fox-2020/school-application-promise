const pg = require('../config/connection')

class ModelTeachers{
    static getTeachers(callback){
        pg.query(`SELECT * FROM teachers ORDER BY id ASC`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
    static getTeacherId(id, callback){
        pg.query(`SELECT * FROM teachers WHERE id = ${id}`, (err, res) => {
            if(err){
                callback(err, null)
            }
            else{
                callback(null, res.rows)
            }
        })
    }
   
}

module.exports = ModelTeachers
