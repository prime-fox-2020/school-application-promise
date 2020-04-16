const pool = require('../config/connection');

class Subjects {
  static getData() {
    const query = `
      SELECT * FROM subjects
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

module.exports = Subjects;