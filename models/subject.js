// const fs = require('fs');
// const filepath = './subjects.json';
const pool = require('../config/connection');

class Subject {
    constructor(id, subject_name) {
        this.id = id;
        this.subject_name = subject_name;
    }

    static list() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM subjects ORDER BY id').then(res => {
                let result = [];
                res.rows.forEach((subject) => {
                    result.push(new Subject(subject.id, subject.subject_name));
                })
                resolve(result);
            }).catch(err => {
               reject(err);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM subjects WHERE id = $1 ORDER BY id', [id]).then(res => {
                resolve(res.rows[0]);
            }).catch(err => {
                reject(err);
            });
        });
    }
}

module.exports = Subject;

