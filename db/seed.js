const pool = require('../config/connection')
const fs = require('fs')

const teacherList = JSON.parse(fs.readFileSync('./teachers.json', 'utf8'))
const studentList = JSON.parse(fs.readFileSync('./students.json', 'utf8'))
const subjectList = JSON.parse(fs.readFileSync('./subjects.json', 'utf8'))

//add teacher from json
let sqlTeacher = `INSERT INTO teacher (first_name, last_name, email, gender) VALUES `
let arrayTeacher = []
for(let i = 0; i<teacherList.length; i++){
    arrayTeacher.push(`('${teacherList[i].first_name}', '${teacherList[i].last_name}', '${teacherList[i].email}', '${teacherList[i].gender}')`)
}
sqlTeacher += arrayTeacher.join(', ')
// console.log(sqlTeacher);

//add student from json
let sqlStudent = `INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES `
let arrayStudent = []
for(let i = 0; i<studentList.length; i++){
    arrayStudent.push(`('${studentList[i].first_name}', '${studentList[i].last_name}', '${studentList[i].email}', '${studentList[i].gender}', '${studentList[i].birth_date}')`)
}
sqlStudent += arrayStudent.join(', ')
// console.log(sqlStudent);

//add subject from json
let sqlSubject = `INSERT INTO subject (subject_name) VALUES `
let arraySubject = []
for(let i = 0; i<subjectList.length; i++){
    arraySubject.push(`('${subjectList[i].subject_name}')`)
}
sqlSubject += arraySubject.join(', ')
// console.log(sqlSubject);

//add teacher to database
pool.query(sqlTeacher, (err,res) => {
    if(err){
        console.log(err);        
    } else{
        console.log('data teacher telah masuk ke database')
    }
    // pool.end()
})

//add student to database
pool.query(sqlStudent, (err,res) => {
    if(err){
        console.log(err);        
    } else{
        console.log('data student telah masuk ke database')
    }
    // pool.end()
})

//add subject to database
pool.query(sqlSubject, (err,res) => {
    if(err){
        console.log(err);        
    } else{
        console.log('data subject telah masuk ke database')
    }
    pool.end()
})

