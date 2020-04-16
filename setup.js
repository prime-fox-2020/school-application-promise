const pool = require('./config/connection')

const queryStudents = `CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    gender VARCHAR(15),
    birth_date VARCHAR(20)
)`

const queryTeachers = `CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    gender VARCHAR(15)
)`

const querySubjects = `CREATE TABLE subjects(
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(50)
)`

pool.query(queryStudents, (err, res) => {
    if(err) {
        console.log(err)
    } else {
        console.log('tabel students telah berhasil dibuat')

        pool.query(queryTeachers, (err, res) => {
            if(err) {
                console.log(err)
            } else {
                console.log('tabel teachers telah berhasil dibuat')

                pool.query(querySubjects, (err, res) => {
                    if(err){
                        console.log(err)
                    } else {
                        console.log('tabel subjects telah berhasil dibuat')

                        pool.end()
                    }
                })
            }
        })
    }
})