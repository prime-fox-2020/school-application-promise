const pool = require('./config/connection')
const fs   = require('fs')

let students = `
  INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES 
`
let teachers = `
  INSERT INTO teachers (first_name, last_name, email, gender) VALUES 
`

let subjects = `
  INSERT INTO subjects (subject_name) VALUES 
`

fs.readFile('./models/db/students.json', (err, data) => {
  if(err) throw err;
  data = JSON.parse(data)
  
  students += data.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`).join(', ')

  pool.query(students, err => {
    if(err) throw err
    console.log("berhasil memasukan students data")
  })
})

fs.readFile('./models/db/teachers.json', (err, data) => {
  if(err) throw err;
  data = JSON.parse(data)
  
  teachers += data.map(teacher => `('${teacher.first_name}', '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`).join(', ')

  pool.query(teachers, err => {
    if(err) throw err 
    console.log("berhasil memasukan teachers data")
  })
})

fs.readFile('./models/db/subjects.json', (err, data) => {
  if(err) throw err;
  data = JSON.parse(data)
  
  subjects += data.map(subject => `('${subject.subject_name}')`).join(', ')

  pool.query(subjects, err => {
    if(err) throw err
    console.log("berhasil memasukan subjects data")
    pool.end()
  })
})