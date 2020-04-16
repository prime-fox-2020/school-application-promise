const fs = require('fs');
const pool = require('./config/connection.js');

let students = fs.readFileSync("./data/students.json","utf8");
let teachers = fs.readFileSync("./data/teachers.json","utf8");
let subjects = fs.readFileSync("./data/subjects.json","utf8");

let studentsParse = JSON.parse(students);
let teachersParse = JSON.parse(teachers);
let subjectsParse = JSON.parse(subjects);

for (let i = 0; i < studentsParse.length; i++) {
  pool.query(`INSERT INTO students(first_name, last_name, email, gender, birthdate)
  VALUES ('${studentsParse[i].first_name}', '${studentsParse[i].last_name}','${studentsParse[i].email}','${studentsParse[i].gender}','${studentsParse[i].birthdate}')
  `,(err, res) => {
    if(err) console.log(err);
  })
}

for (let i = 0; i < teachersParse.length; i++) {
  pool.query(`INSERT INTO teachers(first_name, last_name, email, gender)
  VALUES ('${teachersParse[i].first_name}', '${teachersParse[i].last_name}','${teachersParse[i].email}','${teachersParse[i].gender}')
  `,(err, res) => {
    if(err) console.log(err);
  })
}
for (let i = 0; i < subjectsParse.length; i++) {
  pool.query(`INSERT INTO subjects(subject_name)
  VALUES ('${subjectsParse[i].subject_name}')
  `,(err, res) => {
    if(err) console.log(err);
  })
}
