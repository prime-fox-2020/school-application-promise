const pool = require('../connection')

class model{

    static readStudent(){

        return pool.query(`SELECT * FROM students
        ORDER BY id ASC
        `)
    }

    static readStudentId(id, callback){
        pool.query(`SELECT * FROM students
            WHERE id = ${id}
        `)
        .then(data=>{
            let temp1 = JSON.stringify(data.rows[0].birthdate)
            temp1 = temp1.split('T')
            let temp2 = ''
            for(let a = 1; a < temp1[0].length; a++){
                temp2 += temp1[0][a]
            }
            data.rows[0].birthdate = temp2
            console.table(data.rows)
            callback(null, data.rows)
        })
        .catch(err =>{
            callback(err, null)
        })
    }

    static addStudent(fname, lname, email, gender, birthDate){

        return new Promise((res, rej) =>{

            let splitted = birthDate.split('-')
    
            if(splitted.length < 3 || fname.length < 1 || lname.length < 1 || email.length < 1 || gender.length < 1){
                rej(`Form shouldn't be empty or invalid birthdate format`, null)
            } else {
                let flag = false
                for(let a = 0; a < email.length; a++){
                    if(email[a] == '@' && email.split('.').length == 2){
                        flag = true
                        pool.query(`INSERT INTO students (first_name, last_name, email, gender, birthdate)
                        VALUES ('${fname}', '${lname}', '${email}', '${gender}', '${birthDate}')
                        `)
                        .then(data =>{
                            res('Successfully adding new student')
                        })
                        .catch(err=>{
                            rej(err)
                        })
                    }
                }
                if(!flag){
                    rej('Invalid email')
                }
                
            }
        })
    }

    static deleteStudent(id){
        return pool.query(`DELETE FROM students
            WHERE id = ${id}
        `)
    }

    static editStudent(id, fname, lname, email, gender, birthDate){
        return pool.query(`UPDATE students
            SET first_name = '${fname}', last_name = '${lname}', email = '${email}', gender = '${gender}', birthdate = '${birthDate}'
            WHERE id = ${id}`)
    }
}

module.exports = model