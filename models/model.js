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
        // let teacher = JSON.parse(fs.readFileSync('./teacher.json', 'utf8'))
    }

    static readSubject(callback){
        pool.query(`SELECT * FROM subjects
            ORDER BY id ASC
        `,(err, data)=>{
            if(err) console.log(err)

            console.table(data.rows)
            callback(null, data.rows)
        })
    }
}

module.exports = model