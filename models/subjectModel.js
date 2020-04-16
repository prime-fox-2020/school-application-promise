const fs = require('fs')
const pool = require('../config/configure')

class SubjectModel{
    
    // static getSubjectList(callback){
    static getSubjectList(){
        const query = `SELECT * FROM subject`
        // pool.query(query, (err,result)=> {
        //     if(err){
        //         callback(err,null)
        //     } else {
        //         callback(null, result.rows)
        //     }
        // })
        return pool
                .query(query)
                // .then(res => res.rows)
                // .catch(err => err)
    }

    // static getSubjectIdList(subjectId, callback){
       
    //     const query = `SELECT * FROM subject WHERE id = $1`
    //     const param = [subjectId]
    //     pool.query(query, param,(err,result)=> {
    //         if(err){
    //             callback(err,null)
    //         } else {
    //             callback(null, result.rows)
    //         }
    //     })
    // }
    static getSubjectIdList(subjectId){
       
        const query = `SELECT * FROM subject WHERE id = $1`
        const param = [subjectId]
        return pool.query(query, param)
    }
}

module.exports = SubjectModel