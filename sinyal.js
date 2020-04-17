const { Pool } = require('pg');
const students = require('./students.json')
const pool = new Pool({
	user: 'airell',
	host: 'localhost',
	database: 'school-app',
	password: 'tauhidjannah',
	port: 5432
});


module.exports = pool