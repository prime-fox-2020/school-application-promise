const pool = require("./connection/config")
// pool gak perlu connect()

const teacherQuery = `
    CREATE TABLE IF NOT EXISTS teachers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR,
        email VARCHAR,
        gender VARCHAR
    )
`

pool.query(teacherQuery, err => {
    if(err) {
        throw err
    }else{
        console.log("sukses membuat table teacher")
    }
})

const studentQuery = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR,
        email VARCHAR,
        gender VARCHAR,
        birth_date DATE
    )
`

pool.query(studentQuery, err => {
    if(err) {
        throw err
    }else{
        console.log("sukses membuat table student")
    }
})

const subjectQuery = `
    CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR
    )
`

pool.query(subjectQuery, err => {
    if(err) {
        throw err
    }else{
        console.log("sukses membuat table subject")
    }

    pool.end()
})