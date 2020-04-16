let pool = require('./connection')

let query1 = `CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    gender VARCHAR NOT NULL
)`
let query2 = `CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    gender VARCHAR NOT NULL,
    birthdate DATE NOT NULL
)`
let query3 = `CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR NOT NULL
)`

let temp = [query1,query2,query3]

for(let a = 0; a < temp.length; a++){
    pool.query(temp[a],(err, res)=>{
        if(err) console.log(err)

        console.log('success')
    })
}