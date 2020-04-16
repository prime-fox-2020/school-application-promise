const pool = require('../config/connection.js')

class SubjectsModel {
    static showSubjects() {
        return new Promise((solve, reject) => {
            const querySubjects = `SELECT * FROM subjects ORDER BY id asc`
            pool.query(querySubjects, (err, data) => {
                if (err) {
                    reject(err)   
                } else { 
                    solve(data.rows)
                }
            })
        })
    }

    static postAdd(queryBody) {
        return new Promise((solve, reject) => {
            const querySubjects = `
            INSERT INTO subjects (subject_name) 
            VALUES ($1)`
            const params = [queryBody.subject_name]
            pool.query(querySubjects, params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data)
                }
            })
        })
    }

    static getEditForm(paramsId) {
        return new Promise((solve, reject) => {
            const querySubjects = `
            SELECT * FROM subjects WHERE id = $1`
            const params = [paramsId]
            pool.query(querySubjects, params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data.rows[0])
                }
            })
        })
    }

    static postEdit(queryBody, paramsId) {
        return new Promise((solve, reject) => {
            const querySubjects = `
            UPDATE subjects 
            SET subject_name = '${queryBody.subject_name}'
            WHERE id = ${Number(paramsId)}`
            pool.query(querySubjects, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data)
                }
            })
        })
    }

    static deleteSubject(paramsId) {
        return new Promise((solve, reject) => {
            const querySubjects = `
            DELETE FROM subjects WHERE id = $1
            `
            const params = [paramsId]
            pool.query(querySubjects, params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data)
                }
            })
        })
    }
}



module.exports = SubjectsModel