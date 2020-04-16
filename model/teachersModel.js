const pool = require('../config/connection');

class TeachersModel {
  static getTeacher(callback) {

    const query = `
      SELECT * FROM teachers
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

  static getTeacherId(teacherID, callback) {

    const query = `
      SELECT * FROM teachers
      WHERE ID = ${teacherID}
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
module.exports = TeachersModel;
