const db = require('../config/connection');

class TeacherModel {
    static getList(req) {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM teachers';
            if (req.params.id) {
                query +=  ` WHERE "id" = ${req.params.id}`; 
            }
            db.query(query)
            .then(res => resolve(res.rows))
            .catch(err => reject(err))
        });
    }
}

module.exports = TeacherModel;