const pool = require('../config/connection');

class SubjectsModel {
  //baca file teacher.json -> lempar data ke controller
  static getSubject() {

    const query = `
      SELECT * FROM subjects
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

  static getSubjectId(subjectID) {

    const query = `
      SELECT * FROM subjects
      WHERE ID = ${subjectID}
    `

  return pool
  .query(query)
  .then(res => {return res.rows })
  .catch(err => {throw err})

  //   pool.query(query, (err, results) => {
  //     if(err) callback(err, null);
  //     else callback(null, results.rows);
  //   });
  }

}
module.exports = SubjectsModel;
