//get data from connection
const pool = require('../config/connection');

class StudentsModel {

  static getStudent(callback) {
    const query = `SELECT * FROM "students" ORDER BY id ASC`

    return pool
    .query(query)
    .then(res => {return res.rows })
    .catch(err => {throw err})

    // pool.query(query, (err, results) => {
    //   if(err) callback(err);
    //   else callback(null, results.rows);
    // });
  }

  static getEmail(studentEmail, callback) {
    const query= `SELECT * FROM "students" WHERE email = '${studentEmail}'`

    return pool
    .query(query)
    .then(res => {return res.rows })
    .catch(err => {throw err})

    // pool.query(query, (err, results) => {
    //   if(err) callback(err);
    //   else callback(null, results.rows);
    // });
  }

  static getStudentID(studentID, callback) {
    const query= `SELECT * FROM "students" WHERE id = '${studentID}'`

    return pool
    .query(query)
    .then(res => {return res.rows })
    .catch(err => {throw err})

    // pool.query(query, (err, results) => {
    //   if(err) callback(err);
    //   else callback(null, results.rows);
    // });
  }

  static addStudent( firstName, lastName, email, gender, birthdate, callback) {
    let error = [];
    if (!firstName) {
      error.push('First name is required!');
    }
    if (!lastName) {
      error.push('Last name is required!');
    }
    if (!email) {
      error.push('Email is required!');
    }
    if (gender!== 'Male' && gender !== 'Female') {
      error.push('Gender is required!');
    }
    if (!birthdate) {
      error.push('birthdate is required!');
    }

    if (error.length > 0) {
      callback(error, null);
    }
    else {
    const query = `INSERT INTO "students" (first_Name, last_Name, email, gender, birthdate)
      VALUES ('${firstName}', '${lastName}', '${email}', '${gender}', '${birthdate}')`

      return pool
      .query(query)
      .then(res => {return res.rows })
      .catch(err => {throw err})

    //   pool.query(query, (err, results) => {
    //     if(err) callback(err);
    //     else callback(null, results.rows);
    //   });
    }
  }


  static editStudent(id, firstName, lastName, email, gender, birthdate) {
    let error = [];
    if (!firstName) {
      error.push('First name is not found!');
    }
    if (!lastName) {
      error.push('Last name is not found!');
    }
    if (!email) {
      error.push('Email is not found!');
    }
    if (gender != 'Male' && gender != 'Female') {
      error.push('Gender is not found!');
    }
    if (!birthdate) {
      error.push('birthdate is not found!');
    }

    if (error.length > 0) {
      callback(error, null);
    }
    else {
    const query = `UPDATE "students" SET first_Name = '${firstName}', last_Name = '${lastName}', email = '${email}', gender = '${gender}', birthdate ='${birthdate}'
    WHERE id = ${id}`

    return pool
    .query(query)
    .then(res => {return res.rows })
    .catch(err => {throw err})

    //   pool.query(query, (err, results) => {
    //     if(err) callback(err);
    //     else callback(null, results.rows);
    //   });
    }
  }

  static deleteStudent(studentId) {
    const query = `
      DELETE FROM students
      WHERE id = '${studentId}'
    `

    return pool
    .query(query)
    .then(res => {return res.rows })
    .catch(err => {throw err})

    // pool.query(query, (err, results) => {
    //   if(err) callback(err, null);
    //   else callback(null, results.rows);
    // });
  }

}

//send data to controller
module.exports = StudentsModel;
