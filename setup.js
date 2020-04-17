const pool = require('./config/connection')

const students = `
  CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(30),
    gender VARCHAR(6),
    birth_date DATE
  )
`
const teachers = `
  CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(30),
    gender VARCHAR(6)
  )
`

const subjects = `
  CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(20)
  )
`

pool.query(students, err => {
  if(err) throw err
  else console.log('Sukses membuat table students')
})

pool.query(teachers, err => {
  if(err) throw err
  else console.log('Sukses membuat table teachers')
})

pool.query(subjects, err => {
  if(err) throw err
  else console.log('Sukses membuat table subjects')
  pool.end()
})