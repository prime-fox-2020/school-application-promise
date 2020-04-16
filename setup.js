const pool = require('./config/connection');

const tableStudent = `CREATE TABLE students (
    id serial PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    gender VARCHAR(100),
    birth_date VARCHAR(100)
)`

const tableTeacher = `CREATE TABLE teachers (
    id serial PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    gender VARCHAR(100)
)`

const tableSubject = `CREATE TABLE subjects (
    id serial PRIMARY KEY,
    subject_name VARCHAR(100)
)`

pool.query(tableStudent, (err, res) => {
    if(err){
        console.log('!!!!!!!!!!');
        console.log('ERROR TABLE STUDENT')
        console.log('!!!!!!!!!!');
    } else {
        console.log('=-=-=-=-=-=-=');
        console.log('CREATE TABLE STUDENT')
        console.log('=-=-=-=-=-=-=');
        pool.query(tableTeacher, (err, res) => {
            if(err){
                console.log('!!!!!!!!!!');
                console.log('ERROR TABLE TEACHER')
                console.log('!!!!!!!!!!');
            } else {
                console.log('=-=-=-=-=-=-=');
                console.log('CREATE TABLE TEACHER')
                console.log('=-=-=-=-=-=-=');
                pool.query(tableSubject, (err, res) => {
                    if(err){
                        console.log('!!!!!!!!!!');
                        console.log('ERROR TABLE SUBJECT')
                        console.log('!!!!!!!!!!');
                    } else {
                        console.log('=-=-=-=-=-=-=');
                        console.log('CREATE TABLE SUBJECT')
                        console.log('=-=-=-=-=-=-=');
                        pool.end()
                    }
                })
            }
        })
    }
})