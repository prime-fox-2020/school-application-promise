const pool = require('../connection')

class model{
    static readTeacher(callback){
        pool.query(`SELECT * FROM teachers
        ORDER BY id ASC
        `,(err, data)=>{
            if(err) console.log(err)

            console.table(data.rows)
            callback(null, data.rows)
        })
    }

    static readTeacherId(id, callback){
        pool.query(`SELECT * FROM teachers
        WHERE id = ${id}
        `,(err, data)=>{
            if(err) console.log(err)

            console.log(id, 'setelah select')
            // console.table(data.rows)
            callback(null, data.rows)
        })
    }
}


module.exports = model