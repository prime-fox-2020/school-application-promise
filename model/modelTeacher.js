const db=require('../db/config')

class ModelTeacher{
    static getData(callback){
        // db.query(`SELECT * FROM teachers`,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         // console.log(data.rows)
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM teachers`)
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }
    static filterGet(id,callback){
        // const query=`SELECT * FROM teachers WHERE id = $1`
        // const params=[id]
        // db.query(query,params,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM teachers WHERE id = $1`,[id])
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }

    static search(email,callback){
        // const query=`SELECT * FROM teachers WHERE email = $1`
        // const params=[email]
        // db.query(query,params,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM teachers WHERE email = $1`,[email])
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }
}

module.exports=ModelTeacher