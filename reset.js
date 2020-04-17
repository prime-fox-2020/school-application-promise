const pool = require('./config/connection')

let query = `
  DROP TABLE IF EXISTS subjects
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully drop subjects table')
  }
})

query = `
  DROP TABLE IF EXISTS students
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully drop students table')
  }
})

query = `
  DROP TABLE IF EXISTS teachers
`
pool.query(query, err => {
  if (err) {
    throw err
  } else {
    console.log('Successfully drop teachers table')
    pool.end()
  }
})