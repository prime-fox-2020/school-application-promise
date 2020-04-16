const pool = require('./connection.js')

const queryStudent =`
    DROP TABLE students`

pool.query(queryStudent,err=>{
    if(err) throw err
    else console.log(`Table Student Dropped!`)
})

const queryTeacher =`
    DROP TABLE teachers`

pool.query(queryTeacher,err=>{
    if(err) throw err
    else console.log(`Table Teacher Dropped!`)
})

const querySubject =`
    DROP TABLE subjects`

pool.query(querySubject,err=>{
    if(err) throw err
    else console.log(`Table Subject Dropped!`)
    pool.end()
})