//require postgre
const pool = require("../config/connection");

class studentsModel {
  static getStudents() {
    return pool.query(`SELECT * from students ORDER BY id asc`)
  }

  static delete(id) {
    return pool.query(`DELETE FROM students WHERE id = ${id}`);
  }

  static addPost(data) {
    const query = `
    INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES ($1, $2, $3, $4, $5)
    `;
    const params = [data.first_name, data.last_name, data.email, data.gender, data.birth_date];
    return pool.query(query, params)
  }

  static editGet(id) {
    const query = `SELECT * FROM students WHERE id = $1`;
    const params = [id];
    return pool.query(query,params)
  }

  static editPost(id, data) {
    const query = `
    UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birth_date = $5 WHERE id = $6
  `;
    const params = [
      data.first_name,
      data.last_name,
      data.email,
      data.gender,
      data.birth_date,
      id
    ];
    return pool.query(query, params)
  }

  static getEmail (email) {
    return pool.query(`SELECT * FROM students WHERE email = '${email}'`)
    }
}

module.exports = studentsModel;
