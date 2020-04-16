const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'schoolApp',
    password: 'xxxaber321',
    port: 5432,
})

module.exports = pool;