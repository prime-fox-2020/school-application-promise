const pool = require('./config/connection')
const fs = require('fs')

fs.readFile('./data/students.json', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        
        const parsData = JSON.parse(data)
        let queryStudent = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `

        parsData.forEach(el => {
            let newId = parsData[parsData.length-1].id

            if(el.id == newId){
                queryStudent += `(
                    '${el.first_name}',
                    '${el.last_name}', 
                    '${el.email}', 
                    '${el.gender}', 
                    '${el.birth_date}')`
            } else {
                queryStudent += `(
                    '${el.first_name}',
                    '${el.last_name}', 
                    '${el.email}', 
                    '${el.gender}', 
                    '${el.birth_date}'), `
            }
        })

        pool.query(queryStudent, (err, res) => {
            if(err){
                console.log(err)
            } else {
                console.log('berhasil menambahkan data students')
                //pool.end()
            }
        })
    }
})

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        
        const parsData = JSON.parse(data)
        let queryTeachers = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES `

        parsData.forEach(el => {
            let newId = parsData[parsData.length-1].id

            if(el.id == newId){
                queryTeachers += `(
                    '${el.first_name}',
                    '${el.last_name}', 
                    '${el.email}', 
                    '${el.gender}')`
            } else {
                queryTeachers += `(
                    '${el.first_name}',
                    '${el.last_name}', 
                    '${el.email}', 
                    '${el.gender}'), `
            }
        })

        pool.query(queryTeachers, (err, res) => {
            if(err){
                console.log(err)
            } else {
                console.log('berhasil menambahkan data teachers')
                //pool.end()
            }
        })
    }
})

fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    } else {
        
        const parsData = JSON.parse(data)
        let querySubjects = `INSERT INTO subjects (subject_name) VALUES `

        parsData.forEach(el => {
            let newId = parsData[parsData.length-1].id

            if(el.id == newId){
                querySubjects += `(
                    '${el.subject_name}')`
            } else {
                querySubjects += `(
                    '${el.subject_name}'), `
            }
        })

        pool.query(querySubjects, (err, res) => {
            if(err){
                console.log(err)
            } else {
                console.log('berhasil menambahkan data subject')
                pool.end()
            }
        })
    }
})

