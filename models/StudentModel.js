const pool = require('../config/connection')

class StudentModel {
    static get() {
        return new Promise((res, rej) => {
            let query = `
                SELECT
                    *
                FROM
                    Student
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

    static add(first_name, last_name, email, gender, birth_date) {
        // let arrayStudent = []
        // arrayStudent.push(`('${req.body.first_name}', '${req.body.last_name}', '${req.body.email}', '${req.body.gender}', '${req.body.birth_date}')`)
        // query += arrayStudent.join(', ')
        return new Promise((res, rej) => {
            pool.query(`
            INSERT INTO 
                student ("first_name", "last_name", "email", "gender", "birth_date") 
            VALUES 
                ($1, $2, $3, $4, $5)`, [first_name, last_name, email, gender, birth_date])
        })
            .then()
            .catch(err => {
                rej(err)
            })

        // callback(req.body.first_name)
    }

    static editForm(params) {
        return new Promise((res, rej) => {
            let query = `
            SELECT
                *
            FROM
                student
            WHERE
                id = ${params}
                `
            pool.query(query)
            .then(data =>{
                res(data.rows)
            })
            .catch(err =>{
                rej(err)
            })

        })
    }

    static edit(first_name, last_name, email, gender, birth_date, params, callback3) {
        return new Promise((res, rej) =>{
            pool.query(`
                    UPDATE 
                        student 
                    SET
                        "first_name" = $1, "last_name" = $2, "email" = $3, "gender" = $4, "birth_date" = $5 
                    WHERE
                        "id" = $6`, [first_name, last_name, email, gender, birth_date, params])
        })
        .then()
        .catch(err =>{
            rej(err)
        })
        
    }

    static delete(params) {
        return new Promise((res, rej) => {
            let query = `
                DELETE FROM student
                WHERE id = ${params}
                `
            pool.query(query)
                .then()
                .catch(err => {
                    rej(err)
                })

        })
    }

}

module.exports = StudentModel