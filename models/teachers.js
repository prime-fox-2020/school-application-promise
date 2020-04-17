const pool = require('../config/connection')

class TeachersModel {
    
    static getAll() {
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM teachers ORDER BY id ASC`)
                .catch(err => reje(err))
                .then(data => reso(data.rows))
        })
    }

    static getByID(id) {
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM teachers WHERE id = ${id}`)
                .catch(err => reje(err))
                .then(data => reso(data.rows))
        })
    }
    
}

module.exports = TeachersModel