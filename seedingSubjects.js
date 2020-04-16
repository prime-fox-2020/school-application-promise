const pool = require('./config/connection')
const fs = require('fs')

let query = `
  INSERT INTO subjects (subject_name) VALUES 
`

fs.readFile('./data/subjects.json', (err,res)=>{
  res = JSON.parse(res)

  query += res.map(sub => `('${sub.subject_name}')`).join(', ')

  pool.query(query, err=>{
    if (err) throw err
    else console.log(`berhasil seeding subjects`);
    pool.end()
  })
})