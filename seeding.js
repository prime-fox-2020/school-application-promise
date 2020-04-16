const pool = require('./config/connection')
const fs = require('fs')

fs.readFile('./data/teachers.json', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        let parse = JSON.parse(res)
        let query = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES `
        for (let a = 0; a < parse.length; a++) {
            query += `('${parse[a].first_name}', '${parse[a].last_name}', '${parse[a].email}', '${parse[a].gender}')${a < parse.length -1 ? ',' : ''}`
        }

        pool.query(query, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Seeding data teachers sukses')
            }
        })
    }
})

fs.readFile('./data/students.json', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        let parse = JSON.parse(res)
        let query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `
        for (let a = 0; a < parse.length; a++) {
            query += `('${parse[a].first_name}', '${parse[a].last_name}', '${parse[a].email}', '${parse[a].gender}', '${parse[a].birth_date}')${a < parse.length -1 ? ',' : ''}`
        }

        pool.query(query, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Seeding data students sukses')
            }
        })
    }
})

fs.readFile('./data/subjects.json', 'utf8', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        let parse = JSON.parse(res)
        let query = `INSERT INTO subjects (subject_name) VALUES `
        for (let a = 0; a < parse.length; a++) {
            query += `('${parse[a].subject_name}')${a < parse.length -1 ? ',' : ''}`
        }

        pool.query(query, err => {
            if (err) {
                console.log(err)
            } else {
                console.log('Seeding data subjects sukses')
            }
        })
    }
})