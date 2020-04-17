const {Pool} = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  database: 'sa_refactor',
  host: 'localhost',
  port: 5432
})

module.exports = pool