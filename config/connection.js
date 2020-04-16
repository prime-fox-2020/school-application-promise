const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'schapp',
  password: 'postgres',
  port: 5432,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = pool