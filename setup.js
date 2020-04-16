const pool = require('./config/connection');

const query = `
  CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    birth_date DATE NOT NULL
  );

  CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR NOT NULL
  );

  CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
  )
`

pool.query(query)
  .then(res => {
    console.log('Tabel berhasil dibuat');
    pool.end();
  })
  .catch(err => console.log(err));