const pool = require('./config/connection')

const query = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15),
    email VARCHAR(25) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birth_date VARCHAR(20) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(20) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    email VARCHAR(25) NOT NULL,
    gender VARCHAR(10) NOT NULL
  )
`

pool.query(query, err =>{
  if (err) throw err
  else console.log(`sukses membuat table students, subjects, teachers`);
  pool.end()
})