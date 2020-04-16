const pool = require('../config/connection')

class StudentsModel {

  static getStudents(){
    return new Promise((res,rej)=>{
      const query = `SELECT * FROM students ORDER BY id asc`
      pool.query(query)
      .then(data=>{
        res(data.rows)
      })
      .catch(err=>{
        rej(err)
      })
    })
  }
  
  static addPost(data){
    let date = this.changeDate(data)

    return new Promise((res,rej)=>{
      const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1,$2, $3, $4, $5)`
      const params = [data.first_name, data.last_name, data.email, data.gender, date]

      pool.query(query,params)
      .then(()=>{
        res(`Student ${params[0]} ${params[1]} has been success add to table`)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static delete(studentsId){
    return new Promise((res,rej)=>{
      const query = `DELETE FROM students WHERE id = $1`
      const params = [studentsId]

      pool.query(query,params)
      .then(()=>{
        res(`Students with id: ${studentsId} has been deleted!`)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static editGet(paramsId) {
    return new Promise((res,rej)=>{
      let query =  `SELECT * FROM students WHERE id = $1`
      let params = [paramsId]

      pool.query(query,params)
      .then((data)=>{
        res(data.rows[0])
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static editPost(student) {
    // let error = this.validate(student)
    let date = this.changeDate(student)

    return new Promise((res,rej)=>{
      let query = `UPDATE students SET first_name = $2, last_name = $3, email = $4, gender = $5, birth_date = $6 WHERE id = $1`
      let params = [student.id, student.first_name, student.last_name, student.email, student.gender, date]

      pool.query(query,params)
      .then(()=>{
        res(`Students with id: ${student.id} has been successfuly edited!`)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static getEmail(email){
    return new Promise((res,rej)=>{
      let query = `SELECT * FROM students WHERE email = $1`
      let params = [email]
      
      pool.query(query,params)
      .then((data)=>{
        res(data.rows)
      })
      .catch(error=>{
        rej(error)
      })
    })
  }

  static validate(student){
    let error = []
    
    if(!student.first_name) error.push(`First Name is required`)
    if(!student.last_name) error.push(`Last Name is required`)
    if(!student.email) {
      error.push(`Email is required`)
    }else if(!student.email.includes('@')) {
      error.push(`Wrong format email`)
    }else if(!student.email.includes('.')) {
      error.push(`Wrong format email`)
    }
    if (student.birth_date.includes('-')){
      let date = student.birth_date
      let temp = date.split('-')
      for (let i = 0; i < temp.length; i++) temp[i] = Number(temp[i])
      
      if (temp[0] < 1800||temp[0] > 2020) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      }else if (temp[1] < 1||temp[1] > 12) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      }else if (temp[2] < 1||temp[2] > 31) {
        error.push(`Birth date format should be YYYY-MM-DD`)
      } 
    } else {
      error.push(`Birth date format should be YYYY-MM-DD`)
    }
    return error
  }
  
  static changeDate(student){
    let date = student.birth_date
    let temp = date.split('-')
    for (let i = 0; i < temp.length; i++) temp[i] = Number(temp[i])
    switch(temp[1]){
      case 1: temp[1] = 'Januari'; break
      case 2: temp[1] = 'Februari'; break
      case 3: temp[1] = 'Maret'; break
      case 4: temp[1] = 'April'; break
      case 5: temp[1] = 'Mei'; break
      case 6: temp[1] = 'Juni'; break
      case 7: temp[1] = 'Juli'; break
      case 8: temp[1] = 'Agustus'; break
      case 9: temp[1] = 'September'; break
      case 10: temp[1] = 'Oktober'; break
      case 11: temp[1] = 'November'; break
      case 12: temp[1] = 'Desember'; break
      default: ;break
    }
    date = temp.reverse().join(' ')
    return date
  }

}

module.exports = StudentsModel