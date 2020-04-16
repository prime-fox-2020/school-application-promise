const {Pool} = require('pg')
const pool = new Pool({
    user : 'postgres',
    password : 'vii97',
    database : 'school_app',
    host: 'localhost',
    port : 5432
})

module.exports = pool