const pool = require('./config/connection')

let query = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20),
    gender VARCHAR(6) NOT NULL,
    email VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create students table')
  }
})

query = `
  CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20),
    gender VARCHAR(6) NOT NULL,
    email VARCHAR(50) NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create teachers table')
  }
})

query = `
  CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(50) NOT NULL
  )
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully create subjects table')
    pool.end()
  }
})