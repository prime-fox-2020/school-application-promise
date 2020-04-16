const pool = require('../config/connection');

class TeacherModel{
    static read(){
        return new Promise((resolve, reject) => {
            let query = `SELECT * from teachers`;

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
            let query = `SELECT * from teachers WHERE id = ${id}`;

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

module.exports = TeacherModel;