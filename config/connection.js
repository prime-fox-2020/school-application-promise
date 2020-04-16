const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'sonyma2903',
    database: 'appschoolrefactor',
    host: 'localhost',
    port: 5432
})

module.exports = pool