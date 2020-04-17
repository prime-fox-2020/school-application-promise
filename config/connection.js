const {Pool} = require('pg');

const pool = new Pool({
    user: "postgres",
    password: "root",
    database: "school_app",
    host: "localhost",
    port: 5432
});

module.exports = pool;