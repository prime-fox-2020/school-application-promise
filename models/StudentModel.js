const pool = require('../config/connection')

class StudentModel {
  constructor({id = null, first_name, last_name, email, gender, birth_date, edit = false}) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
    this.email = email
    this.gender = gender
    this.birth_date = birth_date
    this.edit = edit
  }

  dbToIndonesian() {
    const dictionary = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'
                      , 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    const date = this.birth_date
    let result = ''
    date.getDate() < 10 ? result += `0${date.getDate()}` : result += date.getDate()
    result += ` ${dictionary[date.getMonth()]} `
    result += date.getFullYear()
    return result
  }

  getBod() {
    const date = this.birth_date
    let result = ''
    date.getDate() < 10 ? result += `0${date.getDate()}` : result += date.getDate()
    date.getMonth() < 9 ? result += `-0${date.getMonth() + 1}-` : result += `-${date.getMonth() + 1}-`
    result += date.getFullYear()
    return result
  }

  static bodValidation([date, month, year]) {
    let result = ''
    if (typeof date === 'number' && typeof month === 'number' && typeof year === 'number') {
      if (date < 1 || date > 31 || month < 1 || month > 12 || year < 1900 || new Date(year, 11, 31) > Date.now()) return false
        switch (month) {
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            result += year
            month < 10 ? result += `-0${month}-` : result += `-${month}-`
            date < 10 ? result += `0${date}` : result += `${date}`
            return result
          case 2:
            if (year % 4 !== 0 && date > 28) return false
            if (date > 29) return false
            result += year
            month < 10 ? result += `-0${month}-` : result += `-${month}-`
            date < 10 ? result += `0${date}` : result += `${date}`
            return result
          case 4:
          case 6:
          case 9:
          case 11:
            if (date > 30) return false
            result += year
            month < 10 ? result += `-0${month}-` : result += `-${month}-`
            date < 10 ? result += `0${date}` : result += `${date}`
            return result
        }
    }
    return false
  }
  
  static findAll() {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM students ORDER BY id')
      .then((res) => {
        resolve(res.rows.map(el => new StudentModel(el)))
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM students WHERE email = $1 ORDER BY id'
      pool.query(query, [email])
        .then(res => {
          res.rows.length ? resolve(new StudentModel(res.rows[0]))
          : resolve(`Student with email ${email} is not found.`)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static createOne({first_name, last_name = '', gender, birth_date, email}) {

    return new Promise((resolve, reject) => {
      const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      birth_date = this.bodValidation(birth_date.split('-').map(el => Number(el)))
      if (first_name && gender && email && birth_date && emailValid) {
        const query = 'INSERT INTO students (first_name, last_name, gender, email, birth_date) VALUES ($1, $2, $3, $4, $5)'
        const params = [first_name, last_name, gender, email, birth_date]
        pool.query(query, params, err => {
          if (err) {
            reject(err)
          } else {
            resolve('Data berhasil ditambahkan')
          }
        })
      } else {
        reject('All fields should not be empty.')
      }
    })
  }

  static postEdit(id, { first_name, last_name = '', gender, email, birth_date }) {
    return new Promise((resolve, reject) => {
      
      const query = `UPDATE students SET first_name = $2, last_name = $3, gender = $4, email = $5, birth_date =$6  WHERE id = $1`
      let temDate = this.bodValidation(birth_date.split('-').map(el => Number(el)))
      const params = [ id, first_name, last_name, gender, email, temDate ]
      const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (first_name && gender && email && temDate && emailValid) {
        pool.query(query, params, err => {
          if (err) {
            reject(err)
          } else {
            resolve(`Data berhasil di edit`)
          }
        })
      } else {
        resolve(new StudentModel({id, first_name, last_name, gender, email, birth_date, edit: true}))
      }
    })
  }

  static getEdit(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM students WHERE id = $1`
      const params = [ id ]
      pool.query(query, params)
      .then(res => {
        res.rows.length ?
          resolve(new StudentModel(res.rows[0]))
          : resolve(`Student with ID ${id} is not found.`)
      })
      .catch(err => {
        reject(err)
      })
    })
  }

  static deleteById(id) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM students WHERE id = $1`
      const params = [id]
      pool.query(query, params)
        .then(() => resolve(`Data berhasil dihapus`))
        .catch(err => reject(err))
    })
  }
}
// let eko = {
//   first_name: 'eko',
//   last_name: 'p',
//   email: 'asdasd@assaf.com',
//   gender: 'male',
//   birth_date: '1988-06-01'
// }
// let test = new StudentModel(eko)
// console.log(test.dbToIndonesian())

module.exports = StudentModel