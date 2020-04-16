const pool = require('../config/connection');

class SubjectModel{
    static read(){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from subjects`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    resolve(res.rows);
                }
            })
        })
    }

    static getId(id){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from subjects WHERE id = ${id}`;

            pool.query(query, (err, res) => {
                if(err){
                    reject(err);
                } else {
                    if(res.rows.length === 0){
                        resolve("Id Doesn't Exist!")
                    } else {
                        resolve(res.rows[0]);
                    }
                }
            })
        })
    }
}

module.exports = SubjectModel;