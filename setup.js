//your code here
const {Client}=require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'school',
    password: '',
    port: 5432,
  })
client.connect()


client.query(`
    CREATE TABLE IF NOT EXISTS students(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        email VARCHAR(50),
        gender VARCHAR(15),
        birth_date VARCHAR(255)
    )`
, (err, res) => {
    console.log(err,res)
  })

client.query(`
    CREATE TABLE IF NOT EXISTS teachers(
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        email VARCHAR(50),
        gender VARCHAR(15)
    )`
, (err, res) => {
    console.log(err,res)
})

client.query(`
  CREATE TABLE IF NOT EXISTS subjects(
      id SERIAL PRIMARY KEY,
      subject VARCHAR(15)
  )`
, (err, res) => {
  console.log(err,res)
  client.end()
})



