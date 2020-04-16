const pool = require('../config/connection');

class Teacher {
    constructor(id, first_name, last_name, email, gender) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
    }

    static list() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM teachers ORDER BY id').then(res => {
                let result = [];
                res.rows.forEach((teacher) => {
                    result.push(new Teacher(teacher.id, teacher.first_name, teacher.last_name, teacher.email, teacher.gender));
                });
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM teachers WHERE id = $1 ORDER BY id', [id]).then(res => {
                resolve(res.rows[0]);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Teacher; 