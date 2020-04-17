const pool = require('../config/connection')

class SubjectModel {
  
  static findAll(callback) {
    const query = 'SELECT * FROM subjects ORDER BY id'
    pool.query(query, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, results.rows)
      }
    })
  }

  static findById(id, callback) {
    const query = 'SELECT * FROM subjects WHERE id = $1 ORDER BY id'
    const params = [id]
    pool.query(query, params, (err, results) => {
      if (err) {
        callback(err, null)
      } else {
        callback(null, results.rows)
      }
    })
  }
}

module.exports = SubjectModel