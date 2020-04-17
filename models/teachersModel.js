// const fs = require(`fs`)
const pool = require(`../db/connection`)


class TeachersModel{
    constructor(id,first_name,last_name,email,gender){
        this.id=id,
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.gender = gender
    }

    static getTeachers(){
        return new Promise( (resolve, reject )=>{

            let query =`SELECT * FROM teachers ORDER BY id`

            pool.query(query)
            .then( data =>{
                let intance = []

                for (let i = 0; i < data.rows.length; i++) {

                    intance.push( new TeachersModel (data.rows[i].id,data.rows[i].first_name,data.rows[i].last_name,data.rows[i].email,data.rows[i].gender))
    
                }

                resolve(intance)

            })
            .catch(err =>{
                reject(err)
            })
           
        })
        
    }

}


module.exports = TeachersModel