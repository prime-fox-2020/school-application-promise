const pool = require('./connection.js')

pool.query (`
    CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR,
        last_name VARCHAR,
        email VARCHAR,
        gender VARCHAR,
        birth_date DATE
    )
    `, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            pool.query (`
                CREATE TABLE teachers (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR,
                    last_name VARCHAR,
                    email VARCHAR,
                    gender VARCHAR
                )
            `, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    pool.query(`
                        CREATE TABLE subject (
                            id SERIAL PRIMARY KEY,
                            subject_name VARCHAR
                        )
                    `, (err, res) => {
                        if (err) {
                            console.log(err)
                        }
                    })
                }
            })
        }
})

// reset table

// pool.query(`
//     DROP TABLE teachers
//     `, (err, res) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             pool.query(`
//             DROP TABLE students
//             `, (err, res) => {
//                 if (err) {
//                     console.log(err)
//                 }
//                 else {
//                     pool.query(`
//                     DROP TABLE subjects
//                     `, (err, res) => {
//                         if (err) {
//                             console.log(err)
//                         }
//                     })
//                 }
//             })
//         }
// })