const pool = require('./config/connection')

const queryTeachers = `
CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(30),
    gender VARCHAR(15)
)`

pool.query(queryTeachers, (err) =>{
    if (err) throw err
    else console.log('Sukses membuat table teachers')
})

const queryStudents = `
CREATE TABLE IF NOT EXISTS students (
    id SERIAL,
    first_name VARCHAR(15),
    last_name VARCHAR(15),
    email VARCHAR(30),
    gender VARCHAR(15),
    birth_date VARCHAR(20)
)`

pool.query(queryStudents, (err) =>{
    if (err) throw err
    else console.log('Sukses membuat table students')
})

const querySubjects = `
CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL,
    subject_name VARCHAR(15)
)`

pool.query(querySubjects, (err) =>{
    if (err) throw err
    else console.log('Sukses membuat table subjects')
})