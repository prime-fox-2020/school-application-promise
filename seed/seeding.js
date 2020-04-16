const pool = require('../config/conection');
const fs = require('fs');

let studentsValue = fs.readFileSync('../data/students.json', 'utf-8')
studentsValue = JSON.parse(studentsValue)
let newDataStudents = []
studentsValue.forEach(el => {
    let data = `('${el.first_name}','${el.last_name}','${el.email}','${el.gender}','${el.birth_date}')`
    newDataStudents.push(data)
});

const studentSeed = `INSERT INTO students (first_name,	last_name, email, gender, birth_date)
VALUES\n${newDataStudents.join(', \n')}`

// console.log('studentSeed: ', studentSeed);

let teachersValue = fs.readFileSync('../data/teachers.json', 'utf-8')
teachersValue = JSON.parse(teachersValue)
let newDataTeachers = []
teachersValue.forEach(el => {
    let data = `('${el.first_name}','${el.last_name}','${el.email}','${el.gender}')`
    newDataTeachers.push(data)
});

const teacherSeed = `INSERT INTO teachers (first_name,	last_name, email, gender)
VALUES\n${newDataTeachers.join(', \n')}`

console.log('teacherSeed: ', teacherSeed);

let subjectsValue = fs.readFileSync('../data/subjects.json', 'utf-8')
subjectsValue = JSON.parse(subjectsValue)
let newDataSubjects = []
subjectsValue.forEach(el => {
    delete el.id 
    newDataSubjects.push(`('${el.subject_name}')`)
});

const subjectSeed = `INSERT INTO subjets (subject_name)
VALUES\n${newDataSubjects.join(', \n')}`

console.log('studentsValue: ', subjectSeed);

pool.query(studentSeed, (err, res) => {
    if (err) {
        throw err
    } else {
        pool.query(teacherSeed, (err, res) => {
            if (err) {
                throw err
            } else {
                pool.query(subjectSeed, (err, res) => {
                    if (err) {
                        throw err
                    } else {
                        console.log('Seeding data successfully');
                    }
                })
            }
        })
    }
})
