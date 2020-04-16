const pool = require('../config/connection')

class TeacherModel {
    static get() {
        return new Promise((res, rej) => {
            let query = `
            SELECT 
                *    
            FROM    
                teacher
        `
            pool.query(query)
                .then(data => {
                    res(data.rows)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
}  


module.exports = TeacherModel