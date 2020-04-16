const pool = require('../config/connection')

class ModelStudents{
    static getStudents(){
        return new Promise( (resolve, reject) => {
            pool.query(`SELECT * FROM students ORDER BY id ASC`)
            .then( (res) => {
                resolve(res)
            })
            .catch( (err) => {
                reject(err)
            })
        })
    }

    static write(data, callback){
       return new Promise((resolve, reject)=>{
           const query = `INSERT INTO students (first_name, last_name, email, gender, birth_date)
           VALUES ($1, $2, $3, $4, $5)`
           const params = [ data.first_name, data.last_name, data.email, data.gender, data.birth_date ] 
           pool.query(query, params)
           .then(res=>{
               resolve(res)
           })
           .catch(err=>{
               reject(err)
           })

       })
    }
  

    static delete(id){
        return new Promise ((resolve, reject) =>{
            
            const query = `DELETE FROM students WHERE id = ${id}`
            pool.query(query)
            .then(res =>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
                
        })
    }

    static readWithId(id){
        return new Promise ((resolve,reject)=>{
            // callback(null, res.rows) //bawa ke controller
            pool.query(`SELECT * FROM students WHERE id = ${id}`)
            .then(res =>{
                resolve(res.rows)
            })
            .catch(err=>{
                reject(err)
            })
        })
        
    }

    static update(data){
        return new Promise ( (resolve, reject) => {
            const query = `UPDATE students SET first_name = $1, last_name = $2, email = $3, gender = $4 birth_date = $5 WHERE id = $6`
            const params = [ data.first_name, data.last_name, data.email, data.gender, data.birth_date, data.id ] 
            pool.query(query, params)
            .then(res =>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
        
    }
    static valid(data){
        const error = [] //
        if(!data.first_name || !data.gender){
            error.push('please do not leave an empty data or unselected options')
        }
        if(!data.email || !data.email.includes('@')){
            error.push('please input email with the correct address')
        }
        if(!data.birth_date){
            error.push('birth date must be filled')
        }
        else{
            const num = data.birth_date.split('-')
            if(num.length !== 3){
                error.push('please use date format of MM-DD-YYYY')
            }
            else if(!(0 < Number(num[1]) && Number(num[1]) <= 31) ){
                error.push('please input the correct number of date')
            }
            else if(!(Number(num[0]) > 0 && Number(num[0]) <= 12) ){
                error.push('please input the correct number of month')
            }
            else if(Number(num[2]) < 1945 ){
                error.push('we do not think our school is appropriate for elders')
            }
        }
        return error
    }
    

    static getPageEmail(email){
        return new Promise ((resolve,reject)=>{
            pool.query(`SELECT * FROM students WHERE email = '${email}'`)
            .then(res =>{
                resolve(res.rows)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}

module.exports = ModelStudents