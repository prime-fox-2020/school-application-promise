const pool = require('./connection.js')
const fs = require('fs')

let queryStudent = `
    INSERT INTO students (first_name, last_name, email, gender, birth_date)
    VALUES `

fs.readFile('./JSON/students.JSON', (err, res) => {
    res = JSON.parse(res)

    // console.log(queryStudent)
    // console.log(res)
    queryStudent += res.map(students => `('${students.first_name}', '${students.last_name}', '${students.email}', '${students.gender}', DATE '${students.birth_date}')`).join(', ')

    pool.query(queryStudent, err => {
        if (err) throw err

        else console.log(`seeding student completed !`)
    })
})

//teacher
let queryTeacher = `
    INSERT INTO teachers (first_name, last_name, email, gender)
    VALUES `

fs.readFile('./JSON/teachers.JSON', (err, res) => {
    res = JSON.parse(res)

    // console.log(res)
    queryTeacher += res.map(teachers => `('${teachers.first_name}', '${teachers.last_name}', '${teachers.email}', '${teachers.gender}')`).join(', ')
    // console.log(queryStudent)

    pool.query(queryTeacher, err => {
        if (err) throw err

        else console.log(`seeding teacher completed !`)
        // pool.end()
    })
})
let querySubjects = `
    INSERT INTO subjects (subject_name)
    VALUES `

fs.readFile('./JSON/subjects.JSON', (err, res) => {
    res = JSON.parse(res)

    // console.log(res)
    querySubjects += res.map(subjects => `('${subjects.subject_name}')`).join(', ')
    // console.log(queryStudent)

    pool.query(querySubjects, err => {
        if (err) throw err

        else console.log(`seeding subject completed !`)
        pool.end()
    })
})