const pool = require('../connection')

class TeachersModel {

    static readTeachersId(req) {
        return pool.query(`SELECT * FROM teachers WHERE id = '${req}'`)
    }


    static read () {
        return pool.query(`SELECT * FROM teachers`)
    }
}

module.exports = TeachersModel;