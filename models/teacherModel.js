const fs = require('fs')
const pool = require('../config/configure')

class TeacherModel{
    
    // static getTeacherList(callback){
        
    //     const query = `SELECT * FROM teacher`

    //     pool.query(query, (err,result)=>{
    //         if(err){
    //             callback(err,null)
    //         } else {
    //             callback(null, result.rows)
    //         }
    //     })
    // }
    static getTeacherList(){
        
        const query = `SELECT * FROM teacher`

        return pool.query(query)
    }

    // static getTeacherIdList(teacherId, callback){
        
    //     const query = `SELECT * FROM teacher WHERE id = $1`
    //     const param = [teacherId]
    //     pool.query(query,param, (err,result)=>{
    //         if(err){
    //             callback(err,null)
    //         } else {
    //             callback(null, result.rows)
    //         }
    //     })
    // }
    static getTeacherIdList(teacherId){
        
        const query = `SELECT * FROM teacher WHERE id = $1`
        const param = [teacherId]
        return pool.query(query,param)
    }
    
}

module.exports = TeacherModel