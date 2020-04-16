const db = require('../config/connection');

class StudentModel {
    static getList(req, callback) {
        let query = 'SELECT * FROM students';
        if (req.params.email) {
            query +=  ` WHERE email = '${req.params.email}' ORDER BY id`; 
        }
        db.query(query, (err, result) => {
            if (err) callback(err, null);
            else {
                const studentList = result.rows;
                callback(null, studentList);
            }
        });
    }

    static editGet(req, callback) {
        const query = 'SELECT * FROM students WHERE id = $1'
        const params = [req.params.id];
        db.query(query, params, (err, result) => {
            if (err) callback(err, null);
            else {
                const student = result.rows[0];
                callback(null, student);
            }
        });
    }
    static editPost(req, callback) {
        const query = 'UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6';
        const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date, req.params.id];
        db.query(query, params, (err) => {
            if (err) callback(err);
            else callback(null);
        });
    }

    static addPost(req, callback) {
        const query = 'INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES($1, $2, $3, $4, $5)';
        const params = [req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date];
        db.query(query, params, (err) => {
            if (err) callback(err);
            else callback(null);
        });
    }

    static deleteGet(req, callback) {
        const query = 'DELETE FROM students WHERE id = $1';
        const params = [req.params.id];
        db.query(query, params, (err, result) => {
            if (err) callback(err, null);
            else callback(null, result);
        });
    }
}

module.exports = StudentModel;