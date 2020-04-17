const { Pool } = require('pg')

const pool = new Pool({
  user: 'pipop',
  host: 'localhost',
  database: 'schoolApp',
  password: 'qwerty1234',
  port: 5432
})

module.exports = pool