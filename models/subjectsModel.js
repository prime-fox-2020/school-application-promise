
const pool = require(`../db/connection`)

class SubjectsModel{
    constructor(id,subjects_name){
        this.id = id,
        this.subjects_name=subjects_name
    }

    static getSubjects(){
        return new Promise( (resolve, reject) =>{

            let query = `SELECT * FROM subjects ORDER BY id `

            pool.query(query)
            .then(data =>{
                let instance = []
                    for (let i = 0; i < data.rows.length; i++) {
                        instance.push( new SubjectsModel(data.rows[i].id,data.rows[i].subjects_name) )
                    }
                resolve(instance)
            })
            .catch(err =>{

                reject(err)
            })
            
        })
    }
}


module.exports = SubjectsModel