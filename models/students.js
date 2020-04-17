const pool = require('../config/connection')

class StudentsModel {

    static getAll() {
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM students ORDER BY id ASC`)
                .then(data => reso(data.rows))
                .catch(err => reje(err))
        })
    }

    static validation(data) {
        let error = []
        
        if(!data.first_name || !data.last_name || !data.gender || !data.email || ! data.birth_date){
            error.push('Please fill all fields')
        }

        if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('Please input the correct email address')
        }

        const birth_date = data.birth_date.split('-')
        if(birth_date.length !== 3){
            error.push('Please input birth date with dd-mm-yyyy format')
        } else {
            let dd = birth_date[0]
            let mm = birth_date[1]
            let yyyy = birth_date[2]

            if(dd.length !== 2 || mm.length !== 2 || yyyy.length !== 4){
                error.push('Please input birth date with dd-mm-yyyy format')
            } else {
                dd = Number(dd)
                mm = Number(mm)
                yyyy = Number(yyyy)

                if(dd < 1 || dd > 31){
                    error.push('Please input dd between 1 & 31')
                }

                if(dd < 1 || dd > 12){
                    error.push('Please input mm between 1 & 12')
                }

                if(yyyy < 2000 || yyyy > 2005){
                    error.push('Please input rational number for a junior high school student age')
                }
            }
        }    
        return error
    }

    static addProcess(data) {
        // let errorMessage = this.validation(data)
        // if (errorMessage.length > 1) {
        //     callback(errorMessage, null)
        // } else {
        //     const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)`
        //     const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date] 

        //     pool.query(query, params, (err, res) => {
        //         if(err) {
        //             callback(err)
        //         }
        //         else{
        //             callback(null, `New student has been added. Name: ${data.first_name} ${data.last_name}`)
        //         }
        //     })
        // }
        return new Promise((reso, reje) => {
                const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)`
                const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date] 
                pool.query(query, params)
                    .then(data => reso(data))
                    .catch(err => reje(err))
        })
    }

    static deleteProcess(id) {
        // const query = `DELETE FROM students WHERE id = ${id}`
        // pool.query(query, (err, res) => {
        //     if(err) {
        //         callback(err)
        //     }
        //     else {
        //         callback(null, `Student with ID = ${id} has been deleted`)
        //     }
        // })
        return new Promise((reso, reje) => {
            const query = `DELETE FROM students WHERE id = ${id}`
            pool.query(query)
                .then(data => reso())
                .catch(err => reje(err))
    })

    }

    static getOne(id){
        // const query = `SELECT * FROM students WHERE id = $1`
        // const params = [id]

        // pool.query(query, params, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, res.rows)
        //     }
        // })
        return new Promise((reso, reje) => {
            const query = `SELECT * FROM students WHERE id = $1`
            const params = [id]

            pool.query(query, params)
                .then(data => reso(data.rows))
                .catch(err => reje(err))
        })
    }

    static editProcess(id, data) {
        // pool.query(query, params, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, `Student with ID = ${id} has been edited`)
        //     }
        // })
        return new Promise((reso, reje) => {
            const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = ${id}`
            const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date] 
            pool.query(query, params)
                .then(data => reso())
                .catch(err => reje())
        })
    }

    static getByEmail(email){
        // pool.query(`SELECT * FROM students WHERE email = '${email}'`, (err, res) => {
        //     if(err){
        //         callback(err, null)
        //     }
        //     else{
        //         callback(null, res.rows)
        //     }
        // })
        return new Promise((reso, reje) => {
            pool.query(`SELECT * FROM students WHERE email = '${email}'`)
                .then(data => reso(data.rows))
                .catch(err => reje(err))
        })
    }

}

module.exports = StudentsModel