const pool = require('../config/connection')


class ModelStudent {
    constructor(id, first_name, last_name, email, birth_date, gender) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.birth_date = birth_date
        this.gender = gender
    }

    // static getStudent(callback) {

    //     const queryGetStudents = `
    //         SELECT *
    //             FROM students
    //             ORDER BY id asc`

    //     pool.query(queryGetStudents, (err, res) => {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             let input = []
    //             // let dateConvert
    //             for (let i = 0; i < res.rows.length; i++) {
    //                 // dateConvert = (String(res.rows[i].birth_date).split(' ').slice(1,4))
    //                 // let date =`${dateConvert[1]} ${dateConvert[0]} ${dateConvert[2]}`
    //                 let date = res.rows[i].birth_date.toLocaleDateString('ko-KR')
    //                 input.push(new ModelStudent(res.rows[i].id, res.rows[i].first_name, res.rows[i].last_name, res.rows[i].email, res.rows[i].gender, date))
    //             }
    //             callback(null, input)

    //         }
    //     })
    // }
    static getStudent() {
        return new Promise((res, rej) => {
            let input = []
            const queryGetStudents = `
            SELECT *
                FROM students
                ORDER BY id asc`
            pool.query(queryGetStudents, (err, result) => {
                if (err) {
                    rej(err)
                } else {
                    let input = []
                    for (let i = 0; i < result.rows.length; i++) {
                        let date = result.rows[i].birth_date.toLocaleDateString('ko-KR')
                        input.push(new ModelStudent(result.rows[i].id, result.rows[i].first_name, result.rows[i].last_name, result.rows[i].email, result.rows[i].gender, date))
                    }
                    res(input)
                }
            })

        })
    }

    // static getEmail(email, callback) {
    //     const queryEmail = `
    //         SELECT *
    //             FROM students
    //             WHERE email = '${email}'`

    //     pool.query(queryEmail, (err, res) => {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, res.rows)
    //         }
    //     })
    // }
    static getEmail(email) {
        const queryEmail = `
            SELECT *
                FROM students
                WHERE email = '${email}'`

        return pool
        .query(queryEmail)
    }
    // static addStudent(input, callback) {
    //     const error = this.validate(input)
    //     if (error.length > 0) {

    //     } else {
    //         const queryStudents = `
    //                 INSERT INTO students (first_name,last_name,email,gender,birth_date)
    //                 VALUES ($1,$2,$3,$4,$5)`

    //         const params = [input.first_name, input.last_name, input.email, input.gender, input.birth_date]
    //         pool.query(queryStudents, params, (err, res) => {
    //             if (err) {
    //                 callback(err, null)
    //             } else {
    //                 callback(null, res.rows)
    //             }
    //         })

    //     }
    // }
    static addStudent(input) {
        return new Promise((res,rej)=>{
            const error = this.validate(input)
            if(error.length>0){
                rej(error)
            }else{
                const queryStudents = `
                    INSERT INTO students (first_name,last_name,email,gender,birth_date)
                    VALUES ($1,$2,$3,$4,$5)`

                const params = [input.first_name, input.last_name, input.email, input.gender, input.birth_date]
                pool.query(queryStudents,params,(err,result)=>{
                    if(err){
                        rej(err)
                    }else{
                        res(result.rows)
                    }
                })
            }
        })
    
    }


    // static postEdit(id, input, callback) {
    //     const error = this.validate(input)
    //     if (error.length > 0) {
    //         callback(error, null)
    //     } else {
    //         const queryEdit = `
    //                 UPDATE students
    //                 SET first_name = $2,last_name = $3, email =$4, gender = $5, birth_date = $6
    //                 WHERE id = $1`
    //         // console.log(id)
    //         const params = [id, input.first_name, input.last_name, input.email, input.gender, input.birth_date]
    //         // console.log(queryEdit, params)

    //         pool.query(queryEdit, params, (err, res) => {
    //             if (err) {
    //                 callback(err, null)
    //             } else {
    //                 callback(null, res.rows)
    //             }
    //         })
    //     }

    // }

    static postEdit(id, input) {
       return new Promise((res,rej) =>{
            const error = this.validate(input)
            if (error.length > 0) {
                rej(error)
            } else {
                const queryEdit = `
                        UPDATE students
                        SET first_name = $2,last_name = $3, email =$4, gender = $5, birth_date = $6
                        WHERE id = $1`
                // console.log(id)
                const params = [id, input.first_name, input.last_name, input.email, input.gender, input.birth_date]
                // console.log(queryEdit, params)
    
                pool.query(queryEdit, params, (err, res) => {
                    if (err) {
                        rej(err)
                    } else {
                        res(result.rows)
                    }
                })
            }

        })

    }

    static postDelete(input, callback) {
        const queryDelete = `DELETE FROM students WHERE id = $1`
        const params = [input]
        return pool
        .query(queryDelete,params)
        pool.query(queryDelete, params, (err, res) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, res.rows)
            }
        })
    }
    // static postDelete(input, callback) {
    //     const queryDelete = `DELETE FROM students WHERE id = $1`
    //     const params = [input]
    //     pool.query(queryDelete, params, (err, res) => {
    //         if (err) {
    //             callback(err, null)
    //         } else {
    //             callback(null, res.rows)
    //         }
    //     })
    // }

    static validate(input) {
        let error = []
        if (!input.first_name) {
            error.push('Fill in your first name!')
        }
        if (!input.last_name) {
            error.push('Fill in your last name!')
        }
        if (!input.email) {
            error.push('Fill in your email adress!')
        } else {
            if (!input.email.includes('@')) {
                error.push('Invalid email!')
            } else if (!input.email.includes('@sekolah.id')) {
                error.push('Please use your school provided email')
            }
        }
        if (!input.gender) {
            error.push('Choose your gender!')
        }
        if (!input.birth_date) {
            error.push('Fill in your date of birth!')
        } else {
            // console.log(input.birth_date)
            let date = input.birth_date.split('-')
            // console.log(date)
            if (date.length !== 3) {
                error.push('Follow the date format! -> DD-MM-YYYY')
            } else if (Number(date[1] == NaN)) {
                error.push('Please write the Month in Number!')
            } else if (date[0] < 1 || date[0] > 31) {
                error.push('Invalid Date!')
            } else if (date[1] < 1 || date[0] > 12) {
                error.push('Invalid Month!')
            }
        }
        return error
    }
}

module.exports = ModelStudent