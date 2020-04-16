const fs = require('fs')
const pg = require('../config/connection')


fs.readFile('../setup-seed/data-seed/students.json', 'utf8', (err, data) => {
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
        pg.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Seeding data table students.....')
        })
    }
})

fs.readFile('../setup-seed/data-seed/teachers.json', 'utf8', (err, data) => {
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
        pg.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Seeding data table teachers.....')
        })
    }
})

fs.readFile('../setup-seed/data-seed/subjects.json', 'utf8', (err, data) => {
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
        pg.query(query, (err) => {
            if(err) console.log(err)
            else console.log('Seeding data table subjects.....')
        })
    }
})