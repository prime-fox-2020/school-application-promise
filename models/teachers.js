const pool = require ('../config/connection')

class Teacher{
    constructor(id,first_name,last_name,email,gender){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
    }

    static getTable(cb){
        const select = 'SELECT * FROM "teachers" ORDER BY "id" ASC'
        pool.query(select, (err,data)=>{
            if(err){
                cb(err,null)
            }else{
                cb(null,data.rows)
            }
        })
    }

    static viewTeachers(cb){
        this.getTable((err,data)=>{
            if (err){
                cb(err,null)
            }else{
                console.log(data)
                cb(null,data)
            }
        })
    }

    static edit (id,cb){
        let selectById =  `SELECT * FROM "teachers" WHERE id = ${id}`
        pool.query(selectById, (err, data) => {
            if(err){
                cb(err, null)
            } else{
                const editData = data.rows[0]
                cb(null, editData)
            }
        })
    }   

    static change(body, cb){ 
        let changeData = `UPDATE "teachers" SET first_name = '${body.first_name}', 
        last_name = '${body.last_name}', 
        email = '${body.email}', gender = '${body.gender}' WHERE id = ${body.id}`
        
        pool.query(changeData, (err, data) => {
            if(err){
                cb(err, null)
            } else{
                console.log('changeData in model done')
                cb(null, true)
            }
        })
    }

    static delete(id, cb) {
        let deleteData = `DELETE FROM "teachers" WHERE "id" = '${id}'`
        pool.query(deleteData, (err, res) => {
          if (err) {
                cb(err, nul)
          } else {
                console.log('berhasil delete')
                cb(null, true)
          }
        })
    }


    static add(body,cb){
        let insertNewData = `INSERT INTO "teachers"("first_name","last_name","email","gender")
        VALUES\n`
        insertNewData += `('${body.first_name}','${body.last_name}','${body.email}','${body.gender}');`
        pool.query(insertNewData,(err,data)=>{
            if(err){
                cb(err,null)
            }else{
                console.log('insertNewData in model done')
                cb(null,true)
          }
      })

    }

    static selectId(id,cb){
        let select = `SELECT * FROM "teachers" WHERE "id" = ${id}`

        pool.query(select, (err, data) => {
            if(err){
                cb(err, null)
            } else{
                const dataSelect = [data.rows[0]]
                cb(null, dataSelect)
            }
        })
    }



}



module.exports = Teacher