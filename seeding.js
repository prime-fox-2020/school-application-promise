const fs = require ('fs')
const pool = require('./connection.js')
let teachers = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
let students = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
let subjects = JSON.parse(fs.readFileSync('./subject.json', 'utf8'))

let queryTeacher = `INSERT INTO teachers (first_name, last_name, email, gender)
VALUES `
let queryStudent = `INSERT INTO students (first_name, last_name, email, gender, birth_date)
VALUES `
let querySubject = `INSERT INTO subject (subject_name)
VALUES `

for (let i = 0; i < teachers.length; i++) {
    queryTeacher += `('${teachers[i].first_name}', '${teachers[i].last_name}', '${teachers[i].email}', '${teachers[i].gender}')`
    if (i == teachers.length-1) {
        queryTeacher += '' 
    }
    else {
        queryTeacher += ','
    }
}

for (let i = 0; i < students.length; i++) {
    queryStudent += `('${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birth_date}')`
    if (i == students.length-1) {
        queryStudent += '' 
    }
    else {
        queryStudent += ','
    }
}

for (let i = 0; i < subjects.length; i++) {
    querySubject += `('${subjects[i].subject_name}')`
    if (i == subjects.length-1) {
        querySubject += '' 
    }
    else {
        querySubject += ','
    }
}

pool.query(queryTeacher, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Success')
    }
})

pool.query(queryStudent, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Success')
    }
})

pool.query(querySubject, (err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Success')
    }
})