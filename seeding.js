const fs = require ('fs')
const pool = require('./config/connection.js')

let students = JSON.parse(fs.readFileSync('./data/students.json','utf-8'))
let insertStudents = `INSERT INTO "students"("first_name","last_name","email","gender","birth_date")VALUES\n`;

for(var i = 0 ; i < students.length ; i++){
    if (i == students.length - 1) {
        insertStudents += `('${students[i].first_name}','${students[i].last_name}','${students[i].email}','${students[i].gender}','${students[i].birth_date}');`
    }else{
        insertStudents += `('${students[i].first_name}','${students[i].last_name}','${students[i].email}','${students[i].gender}','${students[i].birth_date}'),\n`
    }
}

let teachers = JSON.parse(fs.readFileSync('./data/teachers.json','utf-8'))
let insertTeachers = `INSERT INTO "teachers"("first_name","last_name","email","gender")VALUES\n`;

for(var i = 0 ; i < teachers.length ; i ++){
    if( i == teachers.length -1){
        insertTeachers += `('${teachers[i].first_name}','${teachers[i].last_name}','${teachers[i].email}','${teachers[i].gender}');`
    }else{
        insertTeachers += `('${teachers[i].first_name}','${teachers[i].last_name}','${teachers[i].email}','${teachers[i].gender}'),\n`
    }

}

let subjects = JSON.parse(fs.readFileSync('./data/subjects.json','utf-8'))
let insertSubjects = `INSERT INTO "subjects"("id","subject_name")VALUES\n`;

for(var i = 0 ; i < subjects.length ; i ++){
    if( i == subjects.length - 1){
        insertSubjects += `('${subjects[i].id}','${subjects[i].subject_name}');`
    }else{
        insertSubjects += `('${subjects[i].id}','${subjects[i].subject_name}'),\n`
    }

}

pool.query(insertStudents, (err,res)=>{
    if(err){
    console.log(err)
    }else{
        pool.query(insertTeachers, (err, res) => {
            if (err) {
            console.log(err);
            } else {
                pool.query(insertSubjects, (err, res) => {
                    if (err) {
                    console.log(err);
                    } else {
                        console.log('inserting data success');
                        pool.end();
                    }
                })
            }
        })
    }
})