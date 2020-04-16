const pool = require('../config/connection.js')

class ModelTeachers {
    static getAll() {
        const queryGetTeachers = `
            SELECT *
                FROM teachers
                ORDER BY id asc`

        return pool
        .query(queryGetTeachers)
        // pool.query(queryGetTeachers, (err, res) => {
        //     if (err) callback(err, null)

        //     else callback(null, res.rows)
        // })
    }

    static getId(id) {
        const queryId = `
            SELECT *
                FROM teachers
                WHERE id = '${id}'`

        return pool
        .query(queryId)
        // pool.query(queryId, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, res.rows)
        //     }
        // })
    } 
}

module.exports =ModelTeachers