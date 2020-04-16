const pool = require('../config/connection.js')

class StudentsModel {
    static showStudents() {
        return new Promise((solve, reject) => {
            const querySubjects = `SELECT * FROM students ORDER BY id asc`
            pool.query(querySubjects, (err, data) => {
                if (err) {
                    reject(err)   
                } else { 
                    for(let i in data.rows) {
                        if(data.rows[i].birth_date) {
                            data.rows[i].birth_date = data.rows[i].birth_date.toISOString()
                        }
                    }       
                    solve(data.rows)
                }
            })
        })
    }

    static postAdd(queryBody) {
        return new Promise((solve, reject) => {
            const queryStudents = `
            INSERT INTO students (first_name, last_name, email, gender, birth_date) 
            VALUES ($1, $2, $3, $4, $5)`
            let date = new Date(queryBody.birth_date)
            const params = [queryBody.first_name, queryBody.last_name, queryBody.email, queryBody.gender, date]
            pool.query(queryStudents, params, (err, data) => {
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
            const queryStudents = `
            SELECT * FROM students WHERE id = $1`
            const params = [Number(paramsId)]
            pool.query(queryStudents, params, (err, data) => {
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
            const queryStudents = `
            UPDATE students 
            SET first_name = '${queryBody.first_name}',
                last_name = '${queryBody.last_name}',
                email = '${queryBody.email}',
                gender = '${queryBody.gender}',
                birth_date = '${queryBody.birth_date}'
            WHERE id = ${Number(paramsId)}`
            pool.query(queryStudents, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data)
                }
            })
        })
    }

    static deleteStudent(paramsId) {
        return new Promise((solve, reject) => {
            const queryStudents = `
            DELETE FROM students WHERE id = $1
            `
            const params = [paramsId]
            pool.query(queryStudents, params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    solve(data)
                }
            })
        })
    }

    static searchStudentByEmail(bodyEmail) {
        return new Promise((solve, reject) => {
            const queryStudents = `SELECT * FROM students 
            WHERE email = '${bodyEmail}'`
            pool.query(queryStudents, (err, data) => {
                if (err) {
                    reject(err)   
                } else {                    
                    solve(data.rows)
                }
            })
        })
    }
}



module.exports = StudentsModel