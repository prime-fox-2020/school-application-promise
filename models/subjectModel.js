const pool = require('../connection')

class SubjectModel {
    
    static read () {
        return pool.query(`SELECT * FROM subject`)
    }

    static readId (id) {
        return pool.query(`SELECT * FROM subject WHERE id = ${id}`)
    }
}

module.exports = SubjectModel;