const pg = require('../config/connection')

const queryStudents = `CREATE TABLE students (
    id SERIAL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(30),
    gender VARCHAR(15),
    birth_date DATE
)`
pg.query(queryStudents, (err) =>{
    if(err) console.log(err)
    else console.log('Table students has been added to database')
})

const queryTeachers = `CREATE TABLE teachers (
    id SERIAL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(30),
    gender VARCHAR(15)
)`

pg.query(queryTeachers, (err) =>{
    if(err) console.log(err)
    else console.log('Table teachers has been added to database')
})

const querySubjects = `CREATE TABLE subjects (
    id SERIAL,
    subject_name VARCHAR(30)
)`

pg.query(querySubjects, (err) =>{
    if(err) console.log(err)
    else console.log('Table subjects has been added to database')
})