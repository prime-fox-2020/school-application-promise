const pool = require('./config/connection')
const fs = require('fs')

let query = `
  INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES 
`

fs.readFile('./data/students.json', (err,res)=>{
  res = JSON.parse(res)

  query += res.map(stu => `('${stu.first_name}', '${stu.last_name}', '${stu.email}', '${stu.gender}', '${stu.birth_date}')`).join(', ')

  pool.query(query, err=>{
    if (err) throw err
    else console.log(`berhasil seeding students`);
    pool.end()
  })
})