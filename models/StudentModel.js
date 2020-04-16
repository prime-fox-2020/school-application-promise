const db = require('../config/connection');

class StudentModel {
    static getList(req) {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM students';
            if (req.params.email) {
                query +=  ` WHERE "email" = '${req.params.email}' ORDER BY "id"`; 
            }
            db.query(query)
            .then(data => resolve(data.rows))
            .catch(err => reject(err));
        });
    }

    static editGet(req) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM students WHERE "id" = $1';
            const params = [req.params.id];
            db.query(query, params)
            .then(data => resolve(data.rows[0]))
            .catch(err => reject(err));
        });
    }
    static editPost(req) {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6';
            const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date, req.params.id];
            db.query(query, params)
            .then(data => resolve(null))
            .catch(err => reject(err));
        });
    }

    static addPost(req) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES($1, $2, $3, $4, $5)';
            const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date];
            db.query(query, params)
            .then(data => resolve(null))
            .catch(err => reject(err));
        });
    }

    static deleteGet(req) {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM students WHERE id = $1';
            const params = [req.params.id];
            db.query(query, params)
            .then(data => resolve(null))
            .catch(err => reject(err))
        });
    }
}

module.exports = StudentModel;