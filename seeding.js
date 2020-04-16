const fs = require ('fs')
const pool = require('./connection.js')
let teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
let students = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
let subject = JSON.parse(fs.readFileSync('./subject.json', 'utf8'))

for (let i = 0; i < teachers.length; i++) {
    pool.query(`
        INSERT INTO teachers (first_name, last_name, email, gender)
        VALUES ('${teachers[i].first_name}', '${teachers[i].last_name}', '${teachers[i].email}', '${teachers[i].gender}')`)
}

for (let i = 0; i < students.length; i++) {
    pool.query(`
        INSERT INTO students (first_name, last_name, email, gender, birth_date)
        VALUES ('${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birth_date}')`)
}

for (let i = 0; i < subject.length; i++) {
    pool.query(`
        INSERT INTO subject (subject_name)
        VALUES ('${subject[i].subject_name}')`)
}
