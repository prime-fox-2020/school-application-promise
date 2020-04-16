const pool = require('./config/connection');

// init table
pool.query (`
  CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    gender VARCHAR,
    birthdate VARCHAR
  )
  `, (err) => {
    if (err) console.log(err);

    pool.query(`
      CREATE TABLE teachers (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR,
        email VARCHAR,
        gender VARCHAR
      )
      `, (err) => {
        if (err) console.log(err);

        pool.query(`
          CREATE TABLE subjects (
            id SERIAL PRIMARY KEY,
            subject_name VARCHAR
          )
          `, (err) => {
            if (err) console.log(err);
          })
      })
  })


//delete TABLE
//
// pool.query(`
//   DROP TABLE students
//   `,(err, res) => {
//     if(err) console.log(err);
//
//     pool.query(`
//       DROP TABLE teachers
//       `,(err, res) => {
//         if(err) console.log(err);
//
//         pool.query(`
//           DROP TABLE subjects
//           `, (err, res) => {
//             if(err) console.log(err);
//           })
//       })
//   })
