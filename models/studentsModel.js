// const fs = require(`fs`)
const pool = require(`../db/connection`)


class StudentModel{

    constructor(id,first_name,last_name,email,gender,birt_date){
        this.id=id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.gender = gender,
        this.birt_date = birt_date
    }

    static getStudents(){

        return new Promise( (resolve, reject) => {
            let query =  ` SELECT * FROM students ORDER BY id`
            pool.query(query)
            .then( res => {
                let intance = []
                for (let i = 0; i < res.rows.length; i++) {

                    intance.push( new StudentModel (res.rows[i].id,res.rows[i].first_name,res.rows[i].last_name,res.rows[i].email,res.rows[i].gender,res.rows[i].birt_date))
                }
                resolve(intance)
            })
            .catch( err => {
                reject(err)
            })
        })
    }

    static validate(students){
        let dataSalah=[]
        if(!students.first_name){
            dataSalah.push(`FirstName Wajib di isi`)
        }
        if(!students.last_name){
            dataSalah.push(`LastName Wajib di isi`)
        }
        if(!students.email){
            dataSalah.push(`Email Wajib di isi`)
        }
        if(!students.gender){
            dataSalah.push(`Gender Wajib di isi`)
        }
        if(!students.birt_date){
            dataSalah.push(`birt date Wajib di isi`)
        }

        return dataSalah

    }

    static addPost(students){

        let dataSalah = this.validate(students)

        if(dataSalah.length >0 ){
            return new Promise((resolve,reject)=>{
                reject(dataSalah)
            })
        }else{
            return new Promise( (resolve, reject) => {
                let query =` INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birt_date") VALUES ($1, $2, $3, $4, $5)`;

                let params =[students.first_name,students.last_name,students.email,students.gender,students.birt_date]


                pool.query(query,params)
                .then(res =>{
                    resolve(`Student Baru Berhasil di tambahkan !`)
                })
                .catch( err =>{
                    reject(err)
                })
            })

        }

        

    }

    static delete(studentId){

        return new Promise( (resolve,reject)=>{
            let query ='DELETE FROM students WHERE id = $1'
            let params = [studentId]

        pool.query(query,params)
        .then(result =>{
            resolve(` Student dengan Id : ${studentId}, berhasil di delete`)
        })
        .catch(err =>{
            reject(err)
        })

        })
        
    }

    static editGet(studentId){
        
        return new Promise( (resolve,reject)=>{
            let query = ` SELECT * FROM students WHERE id = $1`
            let params =[studentId]

            pool.query(query,params)
            .then(data=>{
                resolve(data.rows[0])
            })
            .catch(err=>{
                reject(err)
            })
        })
        
    }

    static editPost(editStudent){

        return new Promise( (resolve,reject)=>{

        let dataSalah = this.validate(editStudent)
        console.log(dataSalah)
    
        if(dataSalah.length >0 ){
            return new Promise((resolve,reject)=>{
                reject(dataSalah)
            })

        }else{
            let query =` UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4, birt_date = $5 WHERE id = $6`

            let params = [editStudent.first_name,editStudent.last_name,editStudent.email,editStudent.gender,editStudent.birt_date,editStudent.id]

            pool.query(query,params)
            .then(res =>{
                resolve(`Data Students dengan ID : ${editStudent.id} berhasil di edit`)
            })
            .catch(err=>{
                reject(err)
            })
        }


        })
        
        
    }

}


module.exports = StudentModel