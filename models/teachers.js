const pool = require('../config/connection');

class Teachers {
  static getData() {
    const query = `
      SELECT * FROM teachers
    `
    return new Promise((res, rej) => {
      pool.query(query)
        .then(data => {
          res(data.rows);
        })
        .catch(err => {
          rej(err);
        })
    })
  }
}

module.exports = Teachers;