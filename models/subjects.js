const pool = require ('../config/connection')
const fs = require('fs')

class Subject{
    constructor(id,subject_name){
        this.id = id
        this.subject_name = subject_name
    }

    static getTable(cb){
        const select = 'SELECT * FROM "subjects" ORDER BY "id" ASC'
        pool.query(select, (err,data)=>{
            if(err){
                cb(err,null)
            }else{
                cb(null,data.rows)
            }
        })
    }

    static viewSubjects(cb){
        this.getTable((err,data)=>{
            if (err){
                cb(err,null)
            }else{
                cb(null,data)
            }
        })
    }


    static selectEmail(id,cb){
        let select = `SELECT * FROM "subjects" WHERE "id" = ${id}`

        pool.query(selectEmail, (err, data) => {
            if(err){
                cb(err, null)
            } else{
                const byId = [data.rows[0]]
                cb(null, byEmail)
            }
        })
    }


}

module.exports = Subject