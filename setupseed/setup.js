const pool = require('../config/connection')

const queryStudents = `CREATE TABLE students (
    id SERIAL,
    first_name VARCHAR(225),
    last_name VARCHAR(225),
    email VARCHAR(225),
    gender VARCHAR(225),
    birth_date DATE
)`

const queryTeachers = `CREATE TABLE teachers (
    id SERIAL,
    first_name VARCHAR(225),
    last_name VARCHAR(225),
    email VARCHAR(225),
    gender VARCHAR(225)
)`

const querySubjects = `CREATE TABLE subjects (
    id SERIAL,
    subject_name VARCHAR(225)
)`

pool.query(queryStudents, (err) =>{
    if(err) console.log(err)
    else console.log('Table students created.')
})

// pool.query(queryTeachers, (err) =>{
//     if(err) console.log(err)
//     else console.log('Table teachers created.')
// })

// pool.query(querySubjects, (err) =>{
//     if(err) console.log(err)
//     else console.log('Table subjects created.')
// })