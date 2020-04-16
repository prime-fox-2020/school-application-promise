const fs = require("fs")
const pool = require("../connection/config")
const Convert = require("../convertTime")


class studentsModels {
    static showStudents(callback) {

        const query = `
            SELECT * FROM students
            ORDER BY id ASC
        `

        pool
        .query(query)
        .then(res => {
            for (let i = 0; i < res.rows.length; i++) {
                res.rows[i].birth_date = Convert.toIndo(res.rows[i].birth_date.toString().slice(4, 15))
                // console.log(res.rows[i])
            }
            callback(null, res.rows)
        })
        .catch(err => callback(err, null))
    }

    static findStudentByEmail(email, callback) {
        const query = `
            SELECT * FROM students
            WHERE email = $1
        `
        // console.log(email)
        let params = [email]
        pool
        .query(query, params)
        .then(res => {
            // console.log(res)
            res.rows[0].birth_date = Convert.toIndo(res.rows[0].birth_date.toString().slice(4, 15))
            callback(null, res.rows)
        })
        .catch(err => callback(err, null))
    }

    static postAddStudentsData(req, callback) {
        // console.log(req)
        const query = `
                INSERT INTO students (first_name,last_name,email,gender,birth_date) VALUES ($1,$2,$3,$4,$5)
        `
        const error = this.validation(req)

        if (error.length > 0) {
            callback(error, null)
        } else {
            let params = [req.first_name, req.last_name, req.email, req.gender, req.birthdate]
            pool
            .query(query, param)
            .then(res => callback(null, results.rows))
            .catch(err => callback(err, null))   
        }
    }

    static editStudentById(id, error, callback) {

        const query = `
        SELECT * FROM students WHERE id = $1
        `
        let params = [id]
        pool
        .query(query, params)
        .then(res => {
            res.rows[0].birth_date = Convert.toISOIndo(res.rows[0].birth_date.toString().slice(4, 15))
            // console.log(res.rows[0])
            if (error == undefined) {
                res.rows[0].error = false
                callback(null, { student: res.rows[0] })
            } else {
                res.rows[0].error = error
                callback(null, { student: res.rows[0] })
            }
        })
        .catch(err => callback(err, null))
        
    }
    

    static postAfterEdit(req, id, callback) {
        // console.log(id)
        const query = `
                UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6
        `
        const error = this.validation(req)

        if (error.length > 0) {
            callback(error, null)
        } else {
            let params = [req.first_name, req.last_name, req.email, req.gender, req.birthdate, id]
            pool
            .query(query, params)
            .then(res => callback(null, res.rows))
            .catch(err => callback(err, null))
        }
    }

    static deleteStudentsData(id, callback) {
        const query = `
            DELETE FROM students WHERE id = $1
        `

        let params = [id]
        pool
        .query(query, params)
        .then(res => callback(null, results.rows))
        .catch(err => callback(err, null))
    }

    static validation(req){
        const error = []
        const birth = req.birthdate
        if (!req.first_name) {
            error.push('First name is required')
        }
        if (!req.last_name) {
            error.push('Last name is required')
        }
        if (!req.email) {
            error.push('Email is required')
        }
        if (!birth) {
            error.push('Date of birth is required')
        } else if (birth[4] != "-" || birth[7] != "-" ||
            Number(birth[0] + birth[1] + birth[2] + birth[3]) < 1||
            Number(birth[5] + birth[6]) > 12 || Number(birth[5] + birth[6]) < 1 ||
            Number(birth[8] + birth[9]) > 31 || Number(birth[8] + birth[9]) < 1 || 
            birth.length != 10 || isNaN(`${birth[0]}${birth[1]}${birth[2]}${birth[3]}`) || 
            isNaN(`${birth[5]}${birth[6]}`) || isNaN(`${birth[8]}${birth[9]}`)) {
                console.log(birth)
            error.push("Wrong Date format")
        }
        return error
    }
}

module.exports = studentsModels