const pool = require('../config/connection.js')

class ModelSubjects {
    static getSubjects() {
        const queryGetSubjects = `
            SELECT *
                FROM subjects
                ORDER BY id asc`

        return pool
            .query(queryGetSubjects)
        // pool.query(queryGetSubjects, (err, res) => {
        //     if (err) callback(err, null)

        //     else callback(null, res.rows)
        // })
    }

    static getId(id) {
        const queryId = `
            SELECT *
                FROM subjects
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
    //pool.query(queryId) 
    //.then (res=>res.rows)
    //.catch(rej=>err)
} 
    
module.exports =ModelSubjects