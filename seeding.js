const pool = require('./config/connection')
const fs = require('fs')


fs.readFile('./data/students.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    else{
        const parseData = JSON.parse(data)
        let query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `
        for(let i = 0; i < parseData.length; i++){
            query += `('${parseData[i].first_name}', '${parseData[i].last_name}', '${parseData[i].email}', '${parseData[i].gender}', '${parseData[i].birth_date}')`
            if(i < parseData.length - 1){
                query += ', '
            }
        }
        pool.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Success seeding data students')
        })
    }
})

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    else{
        const parseData = JSON.parse(data)
        let query = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES `
        for(let i = 0; i < parseData.length; i++){
            query += `('${parseData[i].first_name}', '${parseData[i].last_name}', '${parseData[i].email}', '${parseData[i].gender}')`
            if(i < parseData.length - 1){
                query += ', '
            }
        }
        pool.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Success seeding data teachers')
        })
    }
})

fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
    if(err) console.log(err)
    else{
        const parseData = JSON.parse(data)
        let query = `INSERT INTO subjects (subject_name) VALUES `
        for(let i = 0; i < parseData.length; i++){
            query += `('${parseData[i].subject_name}')`
            if(i < parseData.length - 1){
                query += ', '
            }
        }
        pool.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Success seeding data subjects')
        })
    }
})