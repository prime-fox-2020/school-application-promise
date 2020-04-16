const pool = require('./config/connection.js')
const fs = require('fs')


// Parse dan seeding data students.json
fs.readFile('./data/students.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err, null);
    } else {
        let queryStudents = `
        INSERT INTO students (first_name, last_name, email, gender, birth_date) 
        VALUES `
        let dataParse = JSON.parse(data)
        let newData = []
        for (let i in dataParse) {
            newData.push(`('${dataParse[i].first_name}', '${dataParse[i].last_name}', '${dataParse[i].email}', '${dataParse[i].gender}', '${dataParse[i].birth_date}')`)
        }
        queryStudents += newData.join(', ')
        pool.query(queryStudents, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Sukses seeding data');
            }
            pool.end()
        })        
    }
})


// Parse dan seeding data teachers.json
fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err, null);
    } else {
        let queryTeachers = `
        INSERT INTO teachers (first_name, last_name, email, gender) 
        VALUES `
        let dataParse = JSON.parse(data)
        let newData = []
        for (let i in dataParse) {
            newData.push(`('${dataParse[i].first_name}', '${dataParse[i].last_name}', '${dataParse[i].email}', '${dataParse[i].gender}')`)
        }
        queryTeachers += newData.join(', ')
        pool.query(queryTeachers, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Sukses seeding data teachers ke database');
            }
            pool.end()
        })        
    }
})


// Parse dan seeding data subjects.json
fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err, null);
    } else {
        let querySubjects = `
        INSERT INTO subjects (subject_name) 
        VALUES `
        let dataParse = JSON.parse(data)
        let newData = []
        for (let i in dataParse) {
            newData.push(`('${dataParse[i].subject_name}')`)
        }
        querySubjects += newData.join(', ')
        pool.query(querySubjects, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Sukses seeding data subjects ke database');
            }
            pool.end()
        })        
    }
})
