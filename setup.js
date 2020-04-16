const pool = require('./config/connection.js')

const queryStudents = `CREATE TABLE students (
    id serial PRIMARY KEY,
    first_name VARCHAR(125),
    last_name VARCHAR(125),
    email VARCHAR(125),
    gender VARCHAR(125),
    birth_date DATE
)`

const queryTeachers = `CREATE TABLE teachers (
    id serial PRIMARY KEY,
    first_name VARCHAR(125),
    last_name VARCHAR(125),
    email VARCHAR(125),
    gender VARCHAR(125)
)`

const querySubjects = `CREATE TABLE subjects (
    id serial PRIMARY KEY,
    subject_name VARCHAR(125)
)`

pool.query(queryStudents, function(err, data) {
    if(err) {
        console.log(err);
    } else {
        pool.query(queryTeachers, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                pool.query(querySubjects, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Sukses Membuat Table Students, Teachers, & Subjects');
                        pool.end()
                    }
                })
            }
        })
    }
})

