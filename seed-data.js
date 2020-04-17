const {Pool}=require('pg')
const fs=require('fs')


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'school',
    password: '',
    port: 5432,
  })

class Students{
    static input(){
        fs.readFile('./students.json','utf8',(err,data)=>{
            if(err)console.log(err)
            else{
            data=JSON.parse(data)
            let result=`INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `
            // result+=data.map(item=>`('${item.first_name}', '${item.last_name}', '${item.email}', '${item.gender}', '${item.birth_date}')`).join(', ')
            data.forEach((item,idx)=>{
                result+=`('${item.first_name}', '${item.last_name}', '${item.email}', '${item.gender}', '${item.birth_date}')${idx<data.length-1 ? ', ' : ''}`
            })
            pool.query(result,(err,data)=>{
                if(err)console.log(err)
                console.log('berhasil')
            })
            }
        })
    }
}

class Teachers{
    static input(){
        fs.readFile('./teachers.json','utf8',(err,data)=>{
            if(err)console.log(err)
            else{
            data=JSON.parse(data)
            let result=`INSERT INTO teachers (first_name, last_name, email, gender) VALUES `
            // result+=data.map(item=>`('${item.first_name}', '${item.last_name}', '${item.email}', '${item.gender}')`).join(', ')
            data.forEach((item,idx)=>{
                result+=`('${item.first_name}', '${item.last_name}', '${item.email}', '${item.gender}')${idx<data.length-1 ? ', ' : ''}`
            })
            pool.query(result,(err,data)=>{
                if(err)console.log(err)
                console.log('berhasil')
            })
            }
        })
    }
}

class Subjects{
    static input(){
        fs.readFile('./subjects.json','utf8',(err,data)=>{
            if(err)console.log(err)
            else{
            data=JSON.parse(data)
            let result=`INSERT INTO subjects (subject) VALUES `
            // result+=data.map(item=>`('${item.subject}')`).join(', ')
            data.forEach((item,idx)=>{
                result+=`('${item.subject_name}')${idx<data.length-1 ? ', ' : ''}`
            })
            pool.query(result,(err,data)=>{
                if(err)console.log(err)
                console.log('berhasil')
                pool.end()
            })
            }
        })
    }
}
Students.input()
Teachers.input()
Subjects.input()

