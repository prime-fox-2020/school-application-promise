const pool = require('./config/configure')

let queryTeacher = `
CREATE TABLE IF NOT EXISTS teacher (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL
);`

let queryStudent = `
CREATE TABLE IF NOT EXISTS student (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birth_date DATE NOT NULL
);`

let querySubject = `
CREATE TABLE IF NOT EXISTS subject (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(20) NOT NULL
);`

pool.query(queryTeacher, (err,res) => {
    if(err){
        throw err
    } else {
        console.log(`berhasil membuat table teacher`)
    }
})

pool.query(queryStudent, (err,res) => {
    if (err){
        throw err 
    } else {
        console.log(`berhasil membuat table student`)
    }
})

pool.query(querySubject, (err,res)=> {
    if(err){
        throw err
    } else {
        console.log(`berhasil membuat table subject`)
        pool.end()
    }
})