const { Pool } = require('pg');
const pool = new Pool({
    database: 'school-application',
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    port: 5432
});

module.exports = pool; 