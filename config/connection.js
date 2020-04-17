const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'school-application-promise',
  password: 'rubahmerah',
  port: 5432,
})

module.exports = pool