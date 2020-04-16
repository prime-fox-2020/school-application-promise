const pool = require('../config/connection')

class TeachersModel {

  static getTeachers(){
    return new Promise((res,rej)=>{
      const query = `SELECT * FROM teachers ORDER BY id asc`
      pool.query(query)
      .then(data=>{
        res(data.rows)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static getId(id){
    return new Promise((res,rej)=>{
      let query = `SELECT * FROM teachers WHERE id = $1`
      let params = [id]

      pool.query(query, params)
      .then(data=>{
        res(data.rows)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }
}

module.exports = TeachersModel