const pool = require ('../config/connection')

class Teacher{
    constructor(id,first_name,last_name,email,gender){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
    }

    static getTable(){
        return new Promise ((resolve,reject)=>{
            const select = 'SELECT * FROM "teachers" ORDER BY "id" ASC'
            pool.query(select, (err,data)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(data.rows)
                }
            })
        })
  
    }

    static viewTeachers(){
        return new Promise ((resolve,reject)=>{
            resolve(this.getTable())
        })
    }

    static edit (id){
        return new Promise(id,(resolve,reject)=>{
            let selectById =  `SELECT * FROM "teachers" WHERE id = ${id}`
            pool.query(selectById, (err, data) => {
                if(err){
                    reject(err, null)
                } else{
                    const editData = data.rows[0]
                    resolve(editData)
                }
            })
        })
    }   

    static change(body){ 
        return new Promise(body,(resolve,reject)=>{
            let changeData = `UPDATE "teachers" SET first_name = '${body.first_name}', 
            last_name = '${body.last_name}', 
            email = '${body.email}', gender = '${body.gender}' WHERE id = ${body.id}`
            
            pool.query(changeData, (err, data) => {
                if(err){
                    reject(err)
                } else{
                    console.log('changeData in model done')
                    resolve(true)
                }
            })
        })
    }

    static delete(id) {
        return new Promise ((resolve,reject)=>{
            let deleteData = `DELETE FROM "teachers" WHERE "id" = '${id}'`
            pool.query(deleteData, (err, res) => {
              if (err) {
                    reject(err)
              } else {
                    console.log('berhasil delete')
                    resolve(true)
              }
            })
        })
    }


    static add(body){
        return new Promise ((resolve,reject)=>{
            let insertNewData = `INSERT INTO "teachers"("first_name","last_name","email","gender")
            VALUES\n`
            insertNewData += `('${body.first_name}','${body.last_name}','${body.email}','${body.gender}');`
            pool.query(insertNewData,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    console.log('insertNewData in model done')
                    resolve(true)
              }
          })
        })

    }

    static selectId(id){
        return new Promise ((resolve,reject)=>{
            let select = `SELECT * FROM "teachers" WHERE "id" = ${id}`
            pool.query(select, (err, data) => {
                if(err){
                    reject(err)
                } else{
                    const dataSelect = [data.rows[0]]
                    resolve(dataSelect)
                }
            })
        })
    }



}



module.exports = Teacher