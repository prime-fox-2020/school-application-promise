const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SchoolApp',
    password: 'postgres123',
    port: 5432
})



// pool.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
//   if (err) {
//     throw err
//   }
//   console.log('user:', res.rows[0])
// }) 



module.exports = pool