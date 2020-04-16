const pool = require('./config/connection')
const fs = require('fs')

let query = `
  INSERT INTO teachers (first_name, last_name, email, gender) VALUES 
`

fs.readFile('./data/teachers.json', (err,res)=>{
  res = JSON.parse(res)

  query += res.map(tea => `('${tea.first_name}', '${tea.last_name}', '${tea.email}', '${tea.gender}')`).join(', ')

  pool.query(query, err=>{
    if (err) throw err
    else console.log(`berhasil seeding teachers`);
    pool.end()
  })
})