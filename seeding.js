const pool = require('./config/connection');
const fs = require('fs');
const fsPromises = fs.promises;

let query = '';

fsPromises.readFile('./students.json', 'utf8')
  .then(data => {
    query += `
      INSERT INTO students (first_name, last_name, email, birth_date)
      VALUES 
    `
    data = JSON.parse(data);
    query += data.map(el => `('${el.first_name}', '${el.last_name}', '${el.email}', '${el.birth_date}')`).join(',');
    return fsPromises.readFile('./subjects.json', 'utf8');
  })
  .then(data => {
    query += `
      ;INSERT INTO subjects (subject_name)
      VALUES 
    `
    data = JSON.parse(data);
    query += data.map(el => `('${el.subject_name}')`).join(',');
    return fsPromises.readFile('./teachers.json', 'utf8');
  })
  .then(data => {
    query += `
      ;INSERT INTO teachers (first_name, last_name, email, gender)
      VALUES 
    `
    data = JSON.parse(data);
    query += data.map(el => `('${el.first_name}', '${el.last_name}', '${el.email}', '${el.gender}')`).join(',');
    pool.query(query)
      .then(res => {
        console.log('Data berhasil ditambahkan');
        pool.end();
      })
      .catch(err => console.log(err));
  })
  .catch(err => {
    console.log(err);
  })