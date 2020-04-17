const pool = require('../config/connection')

class StudentModel {
    constructor(id, firstName, lastName, email, gender, birthDate) {
        this.id = id
        this.first_name = firstName
        this.last_name = lastName
        this.email = email
        this.gender = gender
        this.birth_date = birthDate
    }

    static changeToWord(month){
        switch(month){
            case '1': month = 'Januari'
                break;
            case '2': month = 'Februari'
                break;
            case '3': month = 'Maret'
                break;
            case '4': month = 'April'
                break;
            case '5': month = 'Mei'
                break;
            case '6': month = 'Juni'
                break;
            case '7': month = 'Juli'
                break;
            case '8': month = 'Agustus'
                break;
            case '9': month = 'September'
                break;
            case '10': month = 'Oktober'
                break;
            case '11': month = 'November'
                break;
            case '12': month = 'Desember'
                break;
            default:
                break;
        }
        return month;
    }

    static getStudents() {
        return new Promise((res, rej) => {
            pool.query('SELECT * FROM students ORDER BY id')
            .then(data => {
                let result = []
                let date;
                for (let i = 0; i < data.rows.length; i++) {
                    date = data.rows[i].birth_date.toLocaleDateString().split('/')
                    if(date.length > 1){
                        date[0] = this.changeToWord(date[0]);
                        date[2] = date[2];
                    }
                    let newDate = date[1] + ' ' + date[0] + ' ' + date[2]
                    result.push(new StudentModel(data.rows[i].id, data.rows[i].first_name, data.rows[i].last_name, data.rows[i].email, data.rows[i].gender, newDate))
                }
                res(result)
            }).catch(err => {
                rej(err);
            });
        });
    }

    static validation(data) {
        let error = []
        if (!data.firstName) {
            error.push('Fill in your first name!')
        }
        if (!data.lastName) {
            error.push('Fill in your last name!')
        }
        if (!data.email) {
            error.push('Fill in your email adress!')
        }else{
            if(!data.email.includes('@')){
                error.push('Invalid email!')
            }
        }
        if (!data.gender) {
            error.push('Choose your gender!')
        }
        if (!data.birthDate) {
            error.push('Fill in your date of birth!')
        } else {
            let date = data.birthDate.split('-')
            if (date.length !== 3) {
                error.push('Follow the date format! -> MM-DD-YYYY')
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

    static add(data) {
        // let error = this.validation(data)
        // if (error.length > 0){
        //     return error
        // } else {
            return new Promise((res, rej) => {
                const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date)
                    VALUES ($1, $2, $3, $4, $5)`
        
                const params = [ data.firstName, data.lastName, data.email, data.gender, data.birthDate ] 
                pool.query(query, params)
                .then(data => {
                    res(`New student has been added.`)
                })
                .catch(err => {
                    rej(err)
                })
            })
        // }
    }

    static delete(id) {
        return new Promise((res, rej) => {
            const query = `DELETE FROM students WHERE id = ${id}`
            pool.query(query)
            .then(data => {
                res(`Student with id ${id} has been deleted.`)
            })
        })
    }

    static getEdit(id){
        return new Promise((res, rej) => {
            const query = `SELECT * FROM students WHERE id = ${id}`
            // const params = [id]
            pool.query(query)
            .then(data => {
                let result = []
                let date;
                for (let i = 0; i < data.rows.length; i++) {
                    date = data.rows[i].birth_date.toLocaleDateString().split('/')
                    let newDate = date[0] + '-' + date[1] + '-' + date[2]
                    result.push(new StudentModel(data.rows[i].id, data.rows[i].first_name, data.rows[i].last_name, data.rows[i].email, data.rows[i].gender, newDate))
                }
                res(result)
            })
            .catch(err => {
                rej(err)
            })
        })
    }

    static update(id, data) {
        // let error = this.validation(data)
        // if (error.length > 0){
        //     callback(error, null)
        // } else{
            return new Promise((res, rej) => {
                const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3, birth_date = $4 WHERE id = $1`
        
                const params = [data.firstName, data.lastName, data.email, data.birthDate]
                pool.query(query, params)
                .then(data => {
                    res(`Student with id ${id} has been edited !`)
                })
                .catch(err => {
                    rej(err)
                })
            })
        // }
    }

    static getEmail(email, callback){
        return new Promise((res, rej) => {
            pool.query(`SELECT * FROM students WHERE email = '${email}'`)
            .then(data => {
                let result = []
                let date;
                for (let i = 0; i < data.rows.length; i++) {
                    date = data.rows[i].birth_date.toLocaleDateString().split('/')
                    if(date.length > 1){
                        date[0] = this.changeToWord(date[0]);
                        date[2] = date[2];
                    }
                    let newDate = date[1] + ' ' + date[0] + ' ' + date[2]
                    result.push(new StudentModel(data.rows[i].id, data.rows[i].first_name, data.rows[i].last_name, data.rows[i].email, data.rows[i].gender, newDate))
                }
                res(result)
            })
            .catch(err =>{
                rej(err)
            })
        })
    }
}

module.exports = StudentModel