const pool = require('../config/connection')

class TeachersModel {

  static getTeachers() {
    return new Promise((res, rej) => {
      const query = `SELECT * FROM teachers`
      pool.query(query)
      .then(data => {
        res(data.rows)
      })
      .catch(err => {
        rej(err)
      })
    })
  }

  static getId(params) {
    return new Promise((res, rej) => {
      let query = `SELECT * FROM teachers WHERE id = $1`
      let paramsId = [params]
      pool.query(query, paramsId)
      .then(data => {
        res(data.rows)
      })
      .catch(err => {
        rej(err)
      })
    })
  }
  
}

module.exports = TeachersModel