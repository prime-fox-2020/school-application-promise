const pool = require('./config/connection')
const fs = require('fs')



fs.readFile('./data/students.json', 'utf8', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    const temp = JSON.parse(data)
    let query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `
    for(let i = 0; i < temp.length; i++){
      query += `('${temp[i].first_name}', '${temp[i].last_name}', '${temp[i].email}', '${temp[i].gender}', '${temp[i].birth_date}')`
      if(i < temp.length - 1){
        query += ', '
      }
    }
    pool.query(query, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log('berhasil melakukan seeding table students')
      }
    })
  }
})

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    const temp = JSON.parse(data)
    let query = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES `
    for(let i = 0; i < temp.length; i++){
      query += `('${temp[i].first_name}', '${temp[i].last_name}', '${temp[i].email}', '${temp[i].gender}')`
      if(i < temp.length - 1){
        query += ', '
      }
    }
    pool.query(query, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log('berhasil melakukan seeding table teachers')
      }
    })
  }
})

fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
  if(err) {
    console.log(err)
  } else {
    const temp = JSON.parse(data)
    let query = `INSERT INTO subjects (subject_name) VALUES `
    for(let i = 0; i < temp.length; i++){
      query += `('${temp[i].subject_name}')`
      if(i < temp.length - 1){
        query += ', '
      }
    }
    pool.query(query, (err) => {
      if(err) {
        console.log(err)
      } else {
        console.log('berhasil melakukan seeding table subjects')
      }
    })
  }
})