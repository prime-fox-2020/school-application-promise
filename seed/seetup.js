const pool = require('../config/conection');

const studentQuery = `CREATE TABLE students (
    id serial PRIMARY KEY,
	first_name VARCHAR (50),
	last_name VARCHAR (50),
    email VARCHAR (355),
    gender VARCHAR (10),
    birth_date DATE
    );`

const teacherQuery = `CREATE TABLE teachers (
    id serial PRIMARY KEY,
	first_name VARCHAR (50),
	last_name VARCHAR (50),
    email VARCHAR (355),
    gender VARCHAR (10)
    );`

const subjectQuery = `CREATE TABLE subjets (
    id serial PRIMARY KEY,
	subject_name VARCHAR (50)
    );`

pool.query(studentQuery, (err, res) => {
    if (err) {
        throw err
    } else {
        pool.query(teacherQuery, (err, res) => {
            if (err) {
                throw err
            } else {
                pool.query(subjectQuery, (err, res) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Table success created');
                    }
                })
            }
        })
    }
})