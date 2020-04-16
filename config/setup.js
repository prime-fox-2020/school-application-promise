const pool = require('./connection.js')


const queryStudent = `
    CREATE TABLE students(
        id  SERIAL PRIMARY KEY,
        first_name VARCHAR NOT NULL,
        last_name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        gender VARCHAR NOT NULL,
        birth_date DATE NOT NULL
    )`

pool.query(queryStudent, err => {
    if (err) throw err
    else console.log(`Table Student Created!`)
})

const queryTeacher = `
    CREATE TABLE teachers(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR NOT NULL,
        last_name VARCHAR NOT NULL,
        email VARCHAR NOT NULL,
        gender VARCHAR NOT NULL
    )`

pool.query(queryTeacher, err => {
    if (err) throw err
    else console.log(`Table Teacher Created!`)
})

const querySubjects = `
    CREATE TABLE subjects(
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR NOT NULL
    )`
pool.query(querySubjects, err => {
    if (err) throw err
    else console.log(`Table Subject Created!`)
    pool.end()
})

