const pool = require('./config/configure')
const fs = require('fs')

let queryTeacher = `
INSERT INTO teacher (first_name, last_name, email, gender) VALUES `

fs.readFile('./data/teacher.json','utf-8',(err,res)=> {
    let result = JSON.parse(res)

    queryTeacher += result.map(teacher => `('${teacher.first_name}', '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`).join(', ')
    pool.query(queryTeacher, (err,res)=> {
        if(err){
            throw err
        } else {
            console.log(`sukses menseeding data teacher`)
        }
    })
})

let queryStudent = `
INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES `

fs.readFile('./data/student.json','utf-8',(err,res)=> {
    let result = JSON.parse(res)

    queryStudent += result.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`)
    pool.query(queryStudent, (err,res)=> {
        if(err){
            throw(err)
        } else {
            console.log(`sukses menseeding data student`)
        }
    })
})

let querySubject = `
INSERT INTO subject (subject_name) VALUES `

fs.readFile('./data/subject.json','utf-8',(err,res)=> {
    let result = JSON.parse(res)

    querySubject += result.map(subject => `('${subject.subject_name}')`).join(', ')
    pool.query(querySubject , (err,res)=> {
        if(err){
            throw(err)
        } else {
            console.log(`sukses menseeding data subject`)
            pool.end()
        }
    })
})