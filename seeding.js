const fs = require('fs')
const pool = require('./config/connection')

fs.readFile('./data/students.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    let queryStudent = `
      INSERT INTO students (first_name, last_name, gender, email, birth_date)
      VALUES 
    `
    queryStudent += JSON.parse(data).map(el => `('${el.first_name}', '${el.last_name}', '${el.gender}', '${el.email}', '${el.birth_date}')`).join(', ')
    pool.query(queryStudent, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding students table')
      }
    })
  }
})

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    let queryTeachers = `
  INSERT INTO teachers (first_name, last_name, gender, email)
  VALUES 
`
    queryTeachers += JSON.parse(data).map(el => `('${el.first_name}', '${el.last_name}', '${el.gender}', '${el.email}')`).join(', ')
    pool.query(queryTeachers, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding teachers table')
      }
    })
  }
})


fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
  if (err) {
    throw err
  } else {
    let querySubjects = `
  INSERT INTO subjects (subject_name)
  VALUES 
`
    querySubjects += JSON.parse(data).map(el => `('${el.subject_name}')`).join(', ')
    pool.query(querySubjects, err => {
      if (err) {
        throw err
      } else {
        console.log('Successfully seeding subjects table')
        pool.end()
      }
    })
  }
})
