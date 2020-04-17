const pool = require('../config/connection')

class SubjectsModel {
    
    static getAll() {
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM subjects ORDER BY id ASC`)
                .catch(err => reje(err))
                .then(data => reso(data.rows))
        })
    }

    static getByID(id) {
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM subjects WHERE id = ${id}`)
                .catch(err => reje(err))
                .then(data => reso(data.rows))
        })
    }
    
}

module.exports = SubjectsModel