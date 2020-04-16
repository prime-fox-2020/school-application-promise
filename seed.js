//THIS VERSION DOESNT WORK :/
// const pool = require('./config/connection.js');

// const students = [
//   {
//     id : 1,
//     first_name: 'Joko',
//     last_name: 'Santoso',
//     email: "jokosantoso@sekolah.id",
//     gender: "male",
//     birthdate: "28 Juni 2005"
//   },
//   {
//     id :2,
//     first_name :"Lukman",
//     last_name :"Riki",
//     email :"lukmanriki@sekolah.id",
//     gender :"male",
//     birthdate :"13 April 2004"
//   },
//   {
//     id :3,
//     first_name :"Siti",
//     last_name :"Nurhayati",
//     email :"sitinurhayati@sekolah.id",
//     gender :"female",
//     birthdate :"12 Mei 2005"
//   },
//   {
//     id :4,
//     first_name :"Rika",
//     last_name :"Risti",
//     email :"rikaristi@sekolah.id",
//     gender :"female",
//     birthdate :"3 Januari 2005"
//   }
// ]
//
// const teachers = [
//   {
//     id : 1,
//     first_name: "Bambang",
//     last_name: "Suprapto",
//     email :"bambangsuprapto@sekolah.id",
//     gender :"male"
//   },
//   {
//     id :2,
//     first_name :"Rukmana",
//     last_name :"Fatmawati",
//     email :"rukmanatifatmawati@sekolah.id",
//     gender :"female"
//   },
//   {
//     id :3,
//     first_name :"Butet",
//     last_name :"Naiborhu",
//     email :"butetnaiborhu@sekolah.id",
//     gender :"male"
//   },
//   {
//     id :4,
//     first_name :"Yulius",
//     last_name :"Prawiranegara",
//     email :"yuliusprawiranegara@sekolah.id",
//     gender :"male"
//   }
// ]
//
// const subjects = [
//   {
//     id : 1,
//     subject_name: 'Fisika'
//   },
//   {
//     id : 2,
//     subject_name: 'Ekonomi'
//   }
// ];
//
// //insert data students
// let sqlStudents = `INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birthdate" )`
// let studentsData = [];
// for (let i = 0; i < students.length; i++) {
//   studentsData.push(`('${students[i].first_name}', '${students[i].last_name}', '${students[i].email}', '${students[i].gender}', '${students[i].birthdate}', )`)
// }
// sqlStudents += studentsData.join(',');
//
// console.log(sqlStudents);
//
// pool.query(sqlStudents, (err, res) => {
//   if(err) console.log(err);
//   else console.log('success');
//
// });
//
//insert data teachers
// let sqlTeachers = `INSERT INTO "teachers" ("first_name", "last_name", "email", "gender")`
// let teachersData = [];
// for (let i = 0; i < teachers.length; i++) {
//   teachersData.push(`('${teachers[i].first_name}', '${teachers[i].last_name}', '${teachers[i].email}', '${students[i].gender}')`)
// }
// sqlTeachers += teachersData.join(",");
//
// pool.query(sqlTeachers, (err, res) => {
//   if(err) console.log(err);
//   else console.log('success');
//
// });
//
// //insert data subjects
// let sqlSubjects = `INSERT INTO "subjects" ("subject_name")`
// let subjectsData = [];
// for (let i = 0; i < subjects.length; i++) {
//   subjectsData.push(`('${subjects[i].subject_name}')`)
// }
// sqlSubjects += subjectsData.join(",");
//
// pool.query(sqlSubjects, (err, res) => {
//   if(err) console.log(err);
//   else console.log('success');
//   pool.end();
// });

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
