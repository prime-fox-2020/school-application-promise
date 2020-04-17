const pool = require(`./db/connection`)

const query1 = `
    CREATE TABLE IF NOT EXISTS students (
        "id" SERIAL PRIMARY KEY,
        "first_name" VARCHAR(200) NOT NULL,
        "last_name" VARCHAR(200) NOT NULL,
        "email" VARCHAR(200) NOT NULL,
        "gender" VARCHAR(200) NOT NULL,
        "birt_date" VARCHAR(200) NOT NULL
    ) `

pool.query(query1,err =>{
    if(err) throw err
    else console.log(` sukses memnbuat table Student`)
    // pool.end()
})

const query2 = `
    CREATE TABLE IF NOT EXISTS teachers (
        "id" SERIAL PRIMARY KEY,
        "first_name" VARCHAR(200) NOT NULL,
        "last_name" VARCHAR(200) NOT NULL,
        "email" VARCHAR(200) NOT NULL,
        "gender" VARCHAR(200) NOT NULL
    ) `

pool.query(query2,err =>{
    if(err) throw err
    else console.log(` sukses memnbuat table teachers`)
    // pool.end()
})

const query3 = `
    CREATE TABLE IF NOT EXISTS subjects (
        "id" SERIAL PRIMARY KEY,
        "subjects_name" VARCHAR(200) NOT NULL
    ) `

pool.query(query3,err =>{
    if(err) throw err
    else console.log(` sukses memnbuat table subjects`)
    pool.end()
})