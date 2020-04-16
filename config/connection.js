const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    database: 'school-application-prime-fox',
    host: 'localhost',
    port: 5432
})

module.exports = pool