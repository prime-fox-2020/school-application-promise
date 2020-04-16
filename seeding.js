// const pool = require("./connection/config")
// const fs = require("fs")

// let teachersQuery = `
//     INSERT INTO teachers (first_name,last_name,email,gender) VALUES
// `

// fs.readFile("./teachers.json", (err,results) => {
//     results = JSON.parse(results)
//     // console.log(results)
//     teachersQuery += results.map(data => `('${data.first_name}','${data.last_name}','${data.email}','${data.gender}')`).join(', ')

//     console.log(teachersQuery)
//     pool.query(teachersQuery, err => {
//         if(err){
//             throw err
//         }else{
//             console.log('berhasil melakukan seeding')
//         }
//     })
// })

// let studentsQuery = `
//     INSERT INTO students (first_name,last_name,email,gender,birth_date) VALUES
// `

// fs.readFile("./students.json", (err,results) => {
//     results = JSON.parse(results)
//     // console.log(results)
//     studentsQuery += results.map(data => `('${data.first_name}','${data.last_name}','${data.email}','${data.gender}','${data.birth_date}')`).join(', ')

//     console.log(studentsQuery)
//     pool.query(studentsQuery, err => {
//         if(err){
//             throw err
//         }else{
//             console.log('berhasil melakukan seeding')
//         }
//     })
// })

// let subjectsQuery = `
//     INSERT INTO subjects (subject_name) VALUES
// `

// fs.readFile("./subjects.json", (err,results) => {
//     results = JSON.parse(results)

//     subjectsQuery += results.map(data => `('${data.subject_name}')`).join(', ')

//     console.log(subjectsQuery)
//     pool.query(subjectsQuery, err => {
//         if(err){
//             throw err
//         }else{
//             console.log('berhasil melakukan seeding')
//         }
//     })
// })