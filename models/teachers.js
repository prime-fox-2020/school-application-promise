'use strict'
const pool = require('../config/connection')

class TeachersModel{
  static getTeachers(callback){
    pool
      .query(`SELECT * FROM teachers ORDER BY id`)
      .then(res => callback(null, res.rows))
      .catch(err => callback(err, null))
  }

  static getTeacherId(id,callback){
    pool
      .query(`SELECT * FROM teachers WHERE id = $1`, [id])
      .then(res => callback(null, res.rows[0]))
      .catch(err => callback(err, null))
  }
}

module.exports = TeachersModel