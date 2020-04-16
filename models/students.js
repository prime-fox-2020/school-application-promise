const pool = require('../config/connection');

class Student {
    constructor(id, first_name, last_name, email, gender, birth_date) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.birth_date = birth_date;
    }

    static list() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM students ORDER BY id').then((res) => {
                let result = [];
                res.rows.forEach((student) => {
                    result.push(new Student(student.id, student.first_name, student.last_name, student.email, student.gender, student.birth_date));
                });
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM students WHERE id = $1 ORDER BY id', [id]).then(res => {
                resolve(res.rows[0]);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static findByEmail(email) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM students WHERE email LIKE $1 ORDER BY id', [`%${email}%`]).then(res => {
                let result = [];
                res.rows.forEach((student) => {
                    result.push(new Student(student.id, student.first_name, student.last_name, student.email, student.gender, student.birth_date));
                });
                resolve(result);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getByEmail(email) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM students WHERE email = $1 ORDER BY id', [email]).then(res => {
                resolve(res.rows[0]);
            }).catch(err => {
                reject(err);
            });
        });
    }

    static add(first_name, last_name, email, gender, birth_date) {
        return new Promise((resolve, reject) => {
            pool.query('INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)',
                [first_name, last_name, email, gender, birth_date]).then(res => {
                    resolve();
                }).catch(err => {
                    reject(err);
                });
        });
    }

    static edit(id, first_name, last_name, email, gender, birth_date) {
        return new Promise((resolve, reject) => {
            pool.query('UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 WHERE id = $1',
                [id, first_name, last_name, email, gender, birth_date]).then(res => {
                    resolve();
                }).catch(err => {
                    reject(err);
                });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM students WHERE id = $1', [id]).then(res => {
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Student