const pool = require('../config/conection');

class Teacher {
    static read (cb) {
        pool.query('SELECT * FROM teachers ORDER BY id asc', (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                cb(null, res.rows)
            }
        })
    }
}

module.exports = Teacher;
