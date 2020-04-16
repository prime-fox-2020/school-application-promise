const pool = require('../connection')

class TeachersModel {
    static getTeachers() {
        return this.openFile()
    }

    static getTeachersId(req) {
        return pool.query(`SELECT * FROM teachers WHERE id = '${req}'`)
        // pool.query(`SELECT * FROM teachers WHERE id = '${req}'`, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     }
        //     else {
        //         callback(null, res.rows)
        //     }
        // })
    }


    static openFile () {
        return pool.query(`SELECT * FROM teachers`)
        // pool.query(`SELECT * FROM teachers`, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     }
        //     else {
        //         callback(null, res.rows)
        //     }
        // })
    }
}

module.exports = TeachersModel;