const pool = require('./config/connection')

const queryStudents = `
  CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(125) NOT NULL,
    last_name VARCHAR(125) NOT NULL,
    email VARCHAR(125),
    gender VARCHAR(10),
    birth_date VARCHAR(125) NOT NULL
  )
`

const queryTeachers = `
  CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(125) NOT NULL,
    last_name VARCHAR(125) NOT NULL,
    email VARCHAR(125),
    gender VARCHAR(10)
  )
`

const querySubjects = `
  CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(125) NOT NULL
  )
`

pool.query(queryStudents)
.then(()=>{
  console.log(`sukses membuat table students`);
  return pool.query(queryTeachers)
})
.then(()=>{
  console.log(`sukses membuat table teachers`);
  return pool.query(querySubjects)
})
.then(()=>{
  console.log(`sukses membuat table subjects`);
  pool.end()
})
.catch(err=>{
  console.log(err);
})