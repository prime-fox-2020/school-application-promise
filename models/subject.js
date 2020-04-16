const pool = require('../config/conection');

class Subject {
    static read (cb) {
        pool.query('SELECT * FROM subjets ORDER BY id asc', (err, res) => {
            if (err) {
                cb(err, null)
            } else {
                console.log(res.rows , '====');
                cb(null, res.rows)
            }
        })
    }
}

module.exports = Subject;