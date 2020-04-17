const pool = require ('../config/connection')
const fs = require('fs')

class Subject{
    constructor(id,subject_name){
        this.id = id
        this.subject_name = subject_name
    }

    static getTable(){
        return new Promise ((resolve,reject)=>{
            const select = 'SELECT * FROM "subjects" ORDER BY "id" ASC'
            pool.query(select, (err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data.rows)
                }
            })
        })
  
    }

    static viewSubjects(){
        return new Promise ((resolve,reject)=>{
            // this.getTable((err,data)=>{
            //     if(err){
            //         reject(err)
            //     }else{
                    resolve(this.getTable())
                // }
            })    
        // })
    }


    static selectEmail(id){
        return new Promise ((resolve,reject)=>{
            let select = `SELECT * FROM "subjects" WHERE "id" = ${id}`
            pool.query(select, (err, data) => {
                if(err){
                    reject(err)
                } else{
                    const byId = [data.rows[0]]
                    resolve(byId)
                }
            })
        })

    }


}

module.exports = Subject