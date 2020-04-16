const pg = require('../config/connection')

class ModelTeachers{
    static getTeachers(){
        return new Promise( (resolve, reject) => {
            pg.query(`SELECT * FROM teachers ORDER BY id ASC`)
            .then( res => {
                resolve(res.rows)
            })
            .catch( err => {
                reject(err)
            })
        })
    }
    static getTeacherId(id){
        return new Promise( (resolve, reject) => {
            pg.query(`SELECT * FROM teachers WHERE id = ${id}`)
            .then( res => {
                resolve(res.rows)
            })
            .catch( err => {{
                reject(err)
            }}                
            )
        })
    }
}

module.exports = ModelTeachers
