const pool = require('../config/connection')

class SubjectsModel {

  static getSubjects(){
    return new Promise((res,rej)=>{
      const query = `SELECT * FROM subjects ORDER BY id asc`
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
      let query = `SELECT * FROM subjects WHERE id = $1`
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

module.exports = SubjectsModel