const fs = require('fs');
const pool = require('./config/connection');

fs.readFile('./data/students.json', 'utf-8', (err, dataStudent) => {
    if(err){
        console.log('ERROR STUDENTS');
        console.log(err);
    } else {
        dataStudent = JSON.parse(dataStudent);
        let queryStudent = `INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES `;

        dataStudent.forEach(el => {
            if(el.id == dataStudent[dataStudent.length - 1].id){
                queryStudent += `('${el.first_name}','${el.last_name}', '${el.email}', '${el.gender}', '${el.birth_date}');`;
            } else {
                queryStudent += `('${el.first_name}','${el.last_name}', '${el.email}', '${el.gender}', '${el.birth_date}'), `;
            }
        });

        pool.query(queryStudent, (err, res) => {
            if(err){
                console.log('ERROR STUDENTS');
                console.log(err);
            } else {
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                console.log('INSERT DATA STUDENTS SUCCESS');
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');

                fs.readFile('./data/teachers.json', 'utf-8', (err, dataTeacher) => {
                    if(err){
                        console.log('ERROR TEACHERS');
                        console.log(err);
                    } else {
                        dataTeacher = JSON.parse(dataTeacher);
                        let queryTeacher = `INSERT INTO teachers (first_name, last_name, email, gender) VALUES `;

                        dataTeacher.forEach(el => {
                            if(el.id == dataTeacher[dataTeacher.length - 1].id){
                                queryTeacher += `('${el.first_name}','${el.last_name}', '${el.email}', '${el.gender}');`;
                            } else {
                                queryTeacher += `('${el.first_name}','${el.last_name}', '${el.email}', '${el.gender}'), `;
                            }
                        });

                        pool.query(queryTeacher, (err, res) => {
                            if(err){
                                console.log('ERROR TEACHERS');
                                console.log(err);
                            } else {
                                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                                console.log('INSERT DATA TEACHERS SUCCESS');
                                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');

                                fs.readFile('./data/subjects.json', 'utf-8', (err, dataSubject) => {
                                    if(err){
                                        console.log('ERROR SUBJECTS');
                                        console.log(err);
                                    } else {
                                        dataSubject = JSON.parse(dataSubject);
                                        let querySubject = `INSERT INTO subjects (subject_name) VALUES `;

                                        dataSubject.forEach(el => {
                                            if(el.id == dataSubject[dataSubject.length - 1].id){
                                                querySubject += `('${el.subject_name}');`;
                                            } else {
                                                querySubject += `('${el.subject_name}'), `;
                                            }
                                        });

                                        pool.query(querySubject, (err, res) => {
                                            if(err){
                                                console.log('ERROR SUBJECTS');
                                                console.log(err);
                                            } else {
                                                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');
                                                console.log('INSERT DATA SUBJECTS SUCCESS');
                                                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=');

                                                pool.end();
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})