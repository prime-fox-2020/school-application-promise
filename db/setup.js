const pool = require('../config/connection')

const teacherTable = `
    CREATE TABLE IF NOT EXISTS teacher(
        "id" SERIAL PRIMARY KEY,
        "first_name" VARCHAR(30) NOT NULL,
        "last_name" VARCHAR(30) NOT NULL,
        "email" VARCHAR(30) NOT NULL,
        "gender" VARCHAR(10) NOT NULL
    )
`
const studentTable = `
    CREATE TABLE IF NOT EXISTS student(
        "id" SERIAL PRIMARY KEY,
        "first_name" VARCHAR(30) NOT NULL,
        "last_name" VARCHAR(30) NOT NULL,
        "email" VARCHAR(30) NOT NULL,
        "gender" VARCHAR(10) NOT NULL,
        "birth_date" VARCHAR(30) NOT NULL
    )
`
const subjectTable = `
    CREATE TABLE IF NOT EXISTS subject(
        "id" SERIAL PRIMARY KEY,
        "subject_name" VARCHAR(30) NOT NULL
    )
`
pool.query(teacherTable, (err, res) => {
    if(err){
        console.log(err)
    } else{
        console.log('sukses menambahkan data teacher')
    }
})
pool.query(studentTable, (err, res) => {
    if(err){
        console.log(err)
    } else{
        console.log('sukses menambahkan data student')
    }
})
pool.query(subjectTable, (err, res) => {
    if(err){
        console.log(err)
    } else{
        console.log('sukses menambahkan data subject')
        pool.end()
    }
})
