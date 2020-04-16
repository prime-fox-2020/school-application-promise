const db = require('../config/connection');

class SubjectModel {
    static getList(req, callback) {
        let query = 'SELECT * FROM subjects';
        if (req.params.id) {
            query +=  ` WHERE id = '${req.params.id}'`; 
        }
        db.query(query, (err, result) => {
            if (err) callback(err, null);
            else {
                const subjectList = result.rows;
                callback(null, subjectList);
            }
        });
    }
}

module.exports =SubjectModel;