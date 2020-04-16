const pool = require('./config/connection');
const fs = require('fs');

const teachersFilePath = './teachers.json';
const studentsFilePath = './students.json';
const subjectsFilePath = './subjects.json';

function readFromFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

readFromFile(teachersFilePath)
.then(data => {
    let parsedJson = JSON.parse(data);
    let teachersData = [];
    for(let i = 0; i < parsedJson.length; i++) {
        let teacher = parsedJson[i];
        teachersData.push(`('${teacher.first_name}', '${teacher.last_name}', '${teacher.email}', '${teacher.gender}')`);
    }
    let queryStr = "INSERT INTO teachers (first_name, last_name, email, gender) VALUES " + teachersData.join(', ');
    return pool.query(queryStr);
}).then(res => {
    console.log('Added "teachers" data successfully');
    return readFromFile(studentsFilePath);
}).then(data => {
    let parsedJson = JSON.parse(data);
    let studentsData = [];
    for(let i = 0; i < parsedJson.length; i++) {
        let student = parsedJson[i];
        studentsData.push(`('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`);
    }
    let queryStr = "INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES " + studentsData.join(', ');
    return pool.query(queryStr);
}).then(res => {
    console.log('Added "students" data successfully');
    return readFromFile(subjectsFilePath);
}).then(data => {
    let parsedJson = JSON.parse(data);
    let subjectsData = [];
    for(let i = 0; i < parsedJson.length; i++) {
        let subject = parsedJson[i];
        subjectsData.push(`('${subject.subject_name}')`);
    }
    let queryStr = "INSERT INTO subjects (subject_name) VALUES " + subjectsData.join(', ');
    return pool.query(queryStr);
}).then(res => {
    console.log('Added "subjects" data successfully');
    return pool.end();
}).catch(err => {
    throw err;
}); 