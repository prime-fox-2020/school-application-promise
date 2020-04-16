const pool = require('../config/connection');
const ChangeMonth = require('../helpers/date');

class StudentModel{
    static read(){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from students ORDER BY id ASC`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static add_post(req){
        return new Promise((resolve, reject) => {
            let first_name = req.body.first_name;
            let last_name = req.body.last_name;
            let email = req.body.email;
            let gender = req.body.gender;
            let dateArr = req.body.birth_date.split('-');
    
            if(dateArr.length > 1){
                dateArr[1] = ChangeMonth.changeToWord(dateArr[1]);
                dateArr[2] = dateArr[2].substring(1);
            }
            let birth_date = dateArr.reverse().join(' ');
    
            let query = `INSERT into students (first_name, last_name, email, gender, birth_date) 
            VALUES ($1, $2, $3, $4, $5)`;
    
            let param = [first_name, last_name, email, gender, birth_date];

            pool.query(query, param, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })
    }

    static getEmail(email){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from students WHERE email = '${email}'`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    resolve(res.rows[0]);
                }
            })
        })
    }

    static edit_get(id){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from students WHERE id = ${id}`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    let date = res.rows[0].birth_date.split(' ');
                    date[1] = ChangeMonth.changeToNumber(date[1]);
                    let birth_date = date.reverse().join('-');
                    resolve({el: res.rows[0], birth_date})
                }
            })
        })
    }

    static edit_post(id, newStudent){
        return new Promise((resolve, reject) => {
            let dateArr = newStudent.birth_date.split('-');
            dateArr[1] = ChangeMonth.changeToWord(dateArr[1]);
            let birth_date = dateArr.reverse().join(' ');
            let check = true;

            if(newStudent.first_name === ''){
                check = false;
            }

            if(newStudent.last_name === ''){
                check = false;
            }

            if(newStudent.email === '' || newStudent.email.include('@') === false){
                check = false;
            }

            if(newStudent.birth_date === ''){
                check = false;
            }
    
            let query = `UPDATE students 
                            SET 
                                first_name = '${newStudent.first_name}',
                                last_name = '${newStudent.last_name}',
                                email = '${newStudent.email}',
                                gender = '${newStudent.gender}',
                                birth_date = '${birth_date}'
                            WHERE 
                                id = ${id}`
        
            if(check){
                pool.query(query, (err, res) => {
                    if(err){
                        reject(err);
                    } else {
                        resolve(true);
                    }
                })
            } else{
                reject(true);
            }
    
        })
    }

    static delete(id){
        return new Promise((resolve, reject) => {
            let query = `DELETE from students WHERE id = ${id}`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })
    }
}

module.exports = StudentModel;