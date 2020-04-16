const db = require('../config/connection');

class TeacherModel {
    static getList(req, callback) {
        let query = 'SELECT * FROM teachers';
        if (req.params.id) {
            query +=  ` WHERE id = '${req.params.id}'`; 
        }
        db.query(query, (err, result) => {
            if (err) callback(err, null);
            else {
                const teacherList = result.rows;
                callback(null, teacherList);
            }
        });
    }
}

module.exports = TeacherModel;