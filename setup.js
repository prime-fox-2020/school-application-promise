const pool = require('./config/connection')

let queryStudent = `
CREATE TABLE IF NOT EXISTS student (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    birth_date DATE NOT NULL
);`

pool.query(queryStudent, (err,res) => {
    if (err){
        throw err 
    } else {
        console.log(`berhasil membuat table student`)
    }
})