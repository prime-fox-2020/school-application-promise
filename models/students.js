const pool = require('../config/connection');

class Students {
  static getData() {
    const query = `
      SELECT * FROM students
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

  static addData(first_name, last_name, email, birth_date) {
    const query = `
      INSERT INTO students (first_name, last_name, email, birth_date)
      VALUES ($1, $2, $3, $4)
    `
    const params = [first_name, last_name, email, birth_date];

    return new Promise((res, rej) => {
      const validate = this.validate(first_name, last_name, email, birth_date);
      if (validate.length) {
        res(validate);
      } else {
        pool.query(query, params)
          .then(() => res())
          .catch(err => {
            rej(err);
          })
      }
    })
  }

  static editData(first_name, last_name, email, birth_date, id) {
    const query = `
      UPDATE students
      SET first_name = $1,
          last_name = $2,
          email = $3,
          birth_date = $4
      WHERE
        id = $5
    `
    const params = [first_name, last_name, email, birth_date, id];

    return new Promise((res, rej) => {
      const validate = this.validate(first_name, last_name, email, birth_date);
      if (validate.length) {
        res(validate);
      } else {
        pool.query(query, params)
          .then(() => res())
          .catch(err => {
            rej(err);
          })
      }
    })
  }

  static deleteData(id) {
    const query = `
      DELETE FROM students
      WHERE id = $1
    `

    return new Promise((res, rej) => {
      pool.query(query, [id])
        .then(() => res())
        .catch(err => {
          rej(err);
        })
    })
  }

  static validate(first_name, last_name, email, birth_date) {
    const emailValid = (
      email &&
      email.indexOf('@') > 0 && 
      email[email.indexOf('@')+1] != '.' && 
      email.lastIndexOf('.')+2 < email.length &&
      !email.includes('@', email.indexOf('@')+1) &&
      !email.includes(' ')
    )
    
    const dateArray = birth_date.split('/');
    const dateValid = (
      (birth_date[2] == '/' || birth_date[1] == '/') &&
      (birth_date[5] == '/' || birth_date[4] == '/' || birth_date[3] == '/') &&
      birth_date.length <= 10 &&
      Number(dateArray[0]) <= 31 &&
      Number(dateArray[1]) <= 12 &&
      dateArray[2].length == 4 &&
      !birth_date.includes(' ')
    )

    let error = [];

    if (!first_name) {
      error.push('First Name cannot be empty');
    }
    if (!last_name) {
      error.push('Last Name cannot be empty');
    }
    if (!email) {
      error.push('Email cannot be empty');
    } else if (!emailValid) {
      error.push('Invalid Email');
    }
    if (!birth_date) {
      error.push('Birth Date cannot be empty');
    } else if (!dateValid) {
      error.push('Invalid Birth Date')
    }


    return error;
  }
}

module.exports = Students;