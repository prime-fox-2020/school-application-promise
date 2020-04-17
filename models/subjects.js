'use strict'
const pool = require('../config/connection')

class SubjectsModel{
  static getSubjects(callback){
    pool
      .query(`SELECT * FROM subjects ORDER BY id`)
      .then(res => callback(null, res.rows))
      .catch(err => callback(err, null))
  }

  static getSubjectId(id,callback){
    pool
      .query(`SELECT * FROM subjects WHERE id = $1`, [id])
      .then(res => callback(null, res.rows[0]))
      .catch(err => callback(err, null))
  }
}

module.exports = SubjectsModel