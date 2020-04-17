'use strict'

const dateConvert   = require('../helper/dateConvert')
const pool          = require('../config/connection')

class StudentsModel{
  static getStudents(callback){
    pool
      .query(`SELECT * FROM students ORDER BY id`)
      .then(res => {
        for(let student of res.rows){
          student.birth_date = dateConvert.toIndo(student.birth_date.toString().slice(4,15))
        }
        callback(null, res.rows)
      })
      .catch(err => callback(err, null))
  }

  static addPost(student, callback){
    const first_name  = student.first_name
    const last_name   = student.last_name
    const email       = student.email
    const gender      = student.gender
    const birthday    = student.birthday
    const params = [first_name, last_name, email, gender, birthday]
    const query = `
      INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)
    `
    //Validation
    const err = this.validate(student)
    if(err.length > 0) callback(err, null)
    //Saving to DataBase
    pool
      .query(query, params)
      .then(res => callback(null, 'successfully insert student'))
      .catch(err => callback(err, null))
  }

  static editGet(id, callback){
    pool
      .query(`SELECT * FROM students WHERE id = $1`, [id])
      .then(res => {
        res.rows[0].birth_date = dateConvert.toISOIndo(res.rows[0].birth_date.toString().slice(4,15))
        callback(null, res.rows[0])
      })
      .catch(err => callback(err, null))
  }

  static editPost(id, student, callback){
    const first_name  = student.first_name
    const last_name   = student.last_name
    const email       = student.email
    const gender      = student.gender
    const birthday    = student.birthday
    const params      = [id, first_name, last_name, email, gender, birthday]
    const query = `
      UPDATE students 
      SET 
      first_name = $2, 
      last_name = $3, 
      email = $4, 
      gender = $5,
      birth_date = $6
      WHERE id = $1
    `
    //Validation
    const err = this.validate(student)
    if(err.length > 0) callback(err, null)

    //Update to DB
    pool
      .query(query, params)
      .then(res => callback(null, 'successfully update student'))
      .catch(err => callback(err, null))
  }

  static delete(id,callback){
    pool
      .query(`DELETE FROM students WHERE id = $1`, [id])
      .then(res => callback(null, 'data successfully deleted'))
      .catch(err => callback(err, null))
  }

  static getByEmail(email, callback){
    pool
      .query(`
      SELECT * FROM students WHERE email = $1`, [email])
      .then(res => {
        res.rows[0].birth_date = dateConvert.toIndo(res.rows[0].birth_date.toString().slice(4,15))
        callback(null, res.rows[0])
      })
      .catch(err => callback(err, null))
  }

  static validate(student){
    const error = []
    const date = student.birthday
    if(!student.first_name.length) error.push('First Name Cannot be empty')
    if(!student.last_name.length) error.push('Last Name Cannot be empty')
    if(!student.email.length) error.push('Email Cannot be empty')
    if(!student.gender.length) error.push('Gender Cannot be empty')
    if(!student.birthday.length) error.push('Birth Date Cannot be empty')
    else if(
      date[4] !== '-' || date[7] !== '-' ||
      Number (date[5] + date[6]) > 12 ||
      Number (date[8] + date[9]) > 31 ||
      date.length > 10 ||
      isNaN(`${date[0]}${date[1]}${date[2]}${date[3]}`) ||
      isNaN(`${date[5]}${date[6]}`) ||
      isNaN(`${date[8]}${date[9]}`) ||
      Number(`${date[0]}${date[1]}${date[2]}${date[3]}`) < 0 ||
      Number(`${date[5]}${date[6]}`) < 0 ||
      Number(`${date[8]}${date[9]}`) < 0
      ) error.push('Date in wrong format')
    
    return error;
  }
}

module.exports = StudentsModel