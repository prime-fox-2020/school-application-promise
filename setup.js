const pool = require('./sinyal')




pool.query(`
CREATE TABLE IF NOT EXISTS murid (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  gender VARCHAR,
  birth_date TEXT
)`, (err,data)=>{
  if(err)throw err
  console.log(data)
});





// pool.query(query, (err,data)=>{
//   if(err)throw err
//   console.log(data)
//   pool.end
// })
////////////////////////
// let quer = `
// CREATE TABLE IF NOT EXISTS guru (
//   id SERIAL PRIMARY KEY,
//   first_name VARCHAR(125) NOT NULL,
//   last_name VARCHAR (125),
//   email VARCHAR,
//   gender VARCHAR
// )`

// pool.query(quer , err =>{
//   if(err)throw err
//   else console.log('sukses membuat table guru')
//   pool.end()
// })


// // const subjects = `
// // CREATE TABLE IF NOT EXISTS subjects (
// //   id SERIAL PRIMARY KEY,
// //   subject_name VARCHAR
// // )`

// // pool.query(subjects, err =>{
// //   if(err)throw err
// //   else console.log('suskes membuat table subjects')
// //   pool.end()
// // })