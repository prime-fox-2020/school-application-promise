const pool = require('../config/connection')

class SubjectModel {
    static get() {
        return new Promise((res, rej) => {
            let query = `
            SELECT
                    *
            FROM 
                    subject
        `
            pool.query(query)
                .then(data1 => {
                    res(data1)
                })
                .catch(err => {
                    rej(err)
                })
        })
    }
}

module.exports = SubjectModel
