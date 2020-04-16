const pool = require("../config/connection");

class SubjectsModel {
  static getSubjects() {
    return pool.query(`SELECT * from subjects ORDER BY id asc`)
  }
}

module.exports = SubjectsModel