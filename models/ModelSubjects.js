const pg = require('../config/connection')

class ModelSubjects{
    static getSubjects(){
        return new Promise( (resolve, reject) => {
            pg.query(`SELECT * FROM subjects ORDER BY id ASC`)
            .then( res => {
                resolve(res.rows)
            })
            .catch ( err => {
                reject(err)
            })
        })
    }

    static getSubjectId(id){
        return new Promise( (resolve, reject) => {
            pg.query(`SELECT * FROM subjects WHERE id = ${id}`)
            .then( res => {
                resolve(res.rows)
            })
            .catch ( err => {
                reject(err)
            })
        })
    }
   
}

module.exports = ModelSubjects
