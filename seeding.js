const pool = require('./config/connection')
const fs = require('fs')


let queryStudent = `
INSERT INTO student (first_name, last_name, email, gender, birth_date) VALUES `

fs.readFile('./data/student.json','utf-8',(err,res)=> {
    let result = JSON.parse(res)

    queryStudent += result.map(student => `('${student.first_name}', '${student.last_name}', '${student.email}', '${student.gender}', '${student.birth_date}')`)
    pool.query(queryStudent, (err,res)=> {
        if(err){
            throw(err)
        } else {
            console.log(`sukses menseeding data student`)
        }
    })
})
