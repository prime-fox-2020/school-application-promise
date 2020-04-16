let pool = require('./connection')

let query1 = `DROP TABLE teachers`
let query2 = `DROP TABLE students`
let query3 = `DROP TABLE subjects`

let temp = [query1,query2,query3]

for(let a = 0; a < temp.length; a++){
    pool.query(temp[a],(err, res)=>{
        if(err) console.log(err)

        console.log('success')
    })
}