const pool = require('./config/connection')

let createStudentsTable = `
    CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        gender VARCHAR(50),
        birth_date VARCHAR(50)
    )
`

let createTeachersTable = `
    CREATE TABLE IF NOT EXISTS teachers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(50),
        gender VARCHAR(50)
    )
`

let createSubjectsTable = `
    CREATE TABLE IF NOT EXISTS subjects (
        id SERIAL PRIMARY KEY,
        subject_name VARCHAR(50)
    )
`

pool
  .query(createStudentsTable)
  .then(res => {console.log('Create students table: OK')})
  .catch(err =>{ throw err})

pool
  .query(createTeachersTable)
  .then(res => {console.log('Create teachers table: OK')})
  .catch(err =>{ throw err})

pool
  .query(createSubjectsTable)
  .then(res => {console.log('Create subjects table: OK')})
  .catch(err =>{ throw err})