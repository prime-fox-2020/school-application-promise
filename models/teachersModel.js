const pool = require("../config/connection");

class TeachersModel {
  static getTeachers() {
    return pool.query(`SELECT * from teachers ORDER BY id asc`)
  }

  static getTeachersId(id) {
    return pool.query(`SELECT * FROM teachers WHERE id = '${id}'`)
  }
}

module.exports = TeachersModel;
