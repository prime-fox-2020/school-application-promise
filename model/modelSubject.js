const db=require('../db/config')

class ModelSubject{
    static getData(callback){
        // db.query(`SELECT * FROM subjects`,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM subjects`)
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }
    static filterGet(id,callback){
        // const query=`SELECT * FROM subjects WHERE id = $1`
        // const params=[id]
        // db.query(query,params,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM subjects WHERE id = $1`,[id])
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }

    static search(id,callback){
        // const query=`SELECT * FROM subjects WHERE id = $1`
        // const params=[id]
        // db.query(query,params,(err,data)=>{
        //     if(err){
        //         callback(err,null)
        //     }else{
        //         callback(null,data.rows)
        //     }
        // })
        db
        .query(`SELECT * FROM subjects WHERE id = $1`,[id])
        .then(res => callback(null,res.rows))
        .catch(err => callback(err,null))
    }
}

module.exports=ModelSubject