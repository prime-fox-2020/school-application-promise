const pool = require('../config/connection')
const fs = require('fs')

class StudentsModel{
    static getStudents(cb) {
        return new Promise((resolve, reject) => {
            const querySelect = `SELECT * FROM students ORDER BY id asc `
            pool.query(querySelect, (err, res) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res.rows)
                }
            })
        })

    }

    static addStudentsPost(dataStudents, callback) {
        return new Promise((resolve, reject) => {
            let error = this.validasi(dataStudents)
            if(error.length > 0){
                reject(err)
            } else {
                const queryAdd = `INSERT INTO students (first_name, last_name, email, gender, birth_date) 
                VALUES ($1, $2, $3, $4, $5)`
                
                const values = [dataStudents.first_name, dataStudents.last_name, dataStudents.email, dataStudents.gender, dataStudents.birth_date]
                pool.query(queryAdd, values, (err) => {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(null, 'yeay berhasil')
                    }
                })
            }
        })  
    }

    static validasi(data) {
        let error = []

        if(!data.first_name) {
            error.push('first name is required')
        }

        if(!data.last_name) {
            error.push('last name is required')
        }

        if(!data.email) {
            error.push('email is required')
        } else if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('wrong format')
        }

        if(!data.gender) {
            error.push('gender is required')
        }

        if(!data.birth_date) {
            error.push('birth day is required')
        } else {
            let splitDate = data.birth_date.split('-')

            for(let i=0; i<splitDate.length; i++){

                let yy = Number(splitDate[0])
                let mm = Number(splitDate[1])
                let dd = Number(splitDate[2])

                if(yy !== 2020) {
                    error.push('YYYY should be 2020')
                } 

                if(mm < 1 || mm > 12) {
                    error.push('MM is only 1-12')
                }

                if(dd <1 ||  dd > 32) {
                    error.push('DD is only 1-31')
                }
            }
        }

        return error
    }

    static editStudentsGet(id) {
        return new Promise((resolve, reject) => {
            const select = `SELECT * FROM students WHERE id = ${Number(id)}`

            pool.query(select, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(res.rows[0])
                }
            })
        })
    }

    static editStudentsPost(req) {
        return new Promise((resolve, reject) => {
            const update = `UPDATE students
            SET first_name = '${req.body.first_name}',
                last_name = '${req.body.last_name}',
                email = '${req.body.email}',
                gender = '${req.body.gender}',
                birth_date = '${req.body.birth_date}'
            WHERE id = ${Number(req.params.id)}`

            pool.query(update, (err, data) => {
                if(err){
                    reject(err)
                } else {
                    resolve('berhasil')
                }
            })
        })
    }

    static deleteStudents(id) {
        return new Promise((resolve, reject) => {
            const queryDelete = `DELETE FROM students where id = ${id}`

            pool.query(queryDelete, (err, res) => {
                if(err){
                    reject(err)
                } else {
                    resolve(true)
                }
            })
           
        })
    }

    static emailStudents(email) {
        return new Promise((resolve, reject) => {
            const queryEmail = `SELECT * FROM students where email = '${email}'`

            pool.query(queryEmail)
            .then(res => {
                resolve(res.rows)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = StudentsModel