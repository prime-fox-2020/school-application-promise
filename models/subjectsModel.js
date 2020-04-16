const pool = require('../connection')

class model{
    static readSubject(){
        return pool.query(`SELECT * FROM subjects
        ORDER BY id ASC
        `)
    }

    // static readSubjectId(id, callback){
    //     pool.query(`SELECT * FROM subjects
    //     WHERE id = ${id}
    //     `)
    // }
}


module.exports = model