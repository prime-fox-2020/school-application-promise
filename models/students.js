const pool = require ('../config/connection')

class Student {
    constructor(id,first_name,last_name,email,gender,birth_date){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.gender = gender;
        this.birth_date = birth_date;
    }


    static viewStudents(){
        return new Promise((resolve,reject)=>{
           pool.query('SELECT * FROM "students" ORDER BY "id" ASC',(err,res)=> {
                if(err){
                    reject(err)
                }else{
                    resolve(res.rows)
                }
            })
        })
    }

    static edit (id){
        return new Promise((resolve,reject)=>{
            let selectById =  `SELECT * FROM "students" WHERE id = ${id}`
            pool.query(selectById, (err, res) => {
                if(err){
                    reject(err)
                }else{
                    resolve(res.rows[0])
                }

            })
        })
    }

    static change(body){ 
        return new Promise((resolve,reject)=>{
            let validasi = this.validasi(body)

            if(validasi.length !== 0){
                reject(validasi)
            }
            
            let changeData = `UPDATE "students" SET first_name = '${body.first_name}', 
            last_name = '${body.last_name}', 
            email = '${body.email}', gender = '${body.gender}' , birth_date = '${body.birth_date}',WHERE id = ${body.id}`

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
        return new Promise((resolve,reject)=>{
            let deleteData = `DELETE FROM "students" WHERE "id" = '${id}'`
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
        return new Promise((resolve,reject)=>{
        let validasi = this.validasi(body)
        if(validasi.length !== 0){
            reject(validasi)
        }else{
            let insertNewData = `INSERT INTO "students"("first_name","last_name","email","gender","birth_date")
            VALUES\n`
            insertNewData += `('${body.first_name}','${body.last_name}','${body.email}','${body.gender}',
            '${body.birth_date}');`
            pool.query(insertNewData,(err,data)=>{
                if(err){
                    reject(err)
                }else{
                    console.log('insertNewData in model done')
                    resolve(true)
                }
            })
        }
        })
    }

    static selectEmail(email){
        return new Promise((resolve,reject)=>{
            console.log(email)
            let selectEmail = `SELECT * FROM "students" WHERE "email" = '${email}'`
            pool.query(selectEmail, (err, data) => {
                if(err){
                    reject(err)
                } else{
                    const byEmail = [data.rows[0]]
                    resolve(byEmail)
                }
            })
        })
   
    }

    static validasi(data) {
        let error = []

        if(!data.first_name) {
            error.push('first name is required')
        }

        if(!data.last_name) {
            error.push('last name is required')
        }

        if(!data.email) {
            error.push('email is required')
        } else if(!data.email.includes('@') || !data.email.includes('.')){
            error.push('wrong format')
        }

        if(!data.gender) {
            error.push('gender is required')
        }

        if(!data.birth_date) {
            error.push('birth day is required')
        } else {
            let splitDate = data.birth_date.split('-')

            for(let i=0; i<splitDate.length; i++){

                let yy = Number(splitDate[0])
                let mm = Number(splitDate[1])
                let dd = Number(splitDate[2])

                if(yy !== 2020) {
                    error.push('YYYY should be 2020')
                } 

                if(mm < 1 || mm > 12) {
                    error.push('MM is only 1-12')
                }

                if(dd <1 ||  dd > 32) {
                    error.push('DD is only 1-31')
                }
            }
        }

        return error
    }

}




module.exports = Student

