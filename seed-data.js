const pool = require('./config/connection')
const fs = require('fs')

const teachersFilePath = './data/teachers.json';
const studentsFilePath = './data/students.json';
const subjectsFilePath = './data/subjects.json';

class Seeding{
    static readFromFile(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    static seedStudents(){
        this.readFromFile(studentsFilePath)
        .then(data => {
            data = JSON.parse(data)
            let query = `
                INSERT INTO students (first_name, last_name, email, gender, birth_date) VALUES
            `
            for(let i = 0; i < data.length; i++){
                query += `('${data[i].first_name}', '${data[i].last_name}', '${data[i].email}', '${data[i].gender}', '${data[i].birth_date}')`
                if(i < data.length - 1){
                    query += ', '
                }
            }
            return pool.query(query);
        })
        .then(res => {
            console.log('succes');
        })
        .catch(err => {
            console.log(err);
        })
    }

    static seedTeachers(){
        this.readFromFile(teachersFilePath)
        .then(data => {
            data = JSON.parse(data)
            let query = `
                INSERT INTO teachers (first_name, last_name, email, gender) VALUES
            `
            for(let i = 0; i < data.length; i++){
                query += `('${data[i].first_name}', '${data[i].last_name}', '${data[i].email}', '${data[i].gender}')`
                if(i < data.length - 1){
                    query += ', '
                }
            }
            return pool.query(query);
        })
        .then(res => {
            console.log('succes');
        })
        .catch(err => {
            console.log(err);
        })
    }

    static seedSubjects(){
        this.readFromFile(subjectsFilePath)
        .then(data => {
            data = JSON.parse(data)
            let query = `
                INSERT INTO subjects (subject_name) VALUES
            `
            for(let i = 0; i < data.length; i++){
                query += `('${data[i].subject_name}')`
                if(i < data.length - 1){
                    query += ', '
                }
            }
            return pool.query(query);
        })
        .then(res => {
            console.log('succes');
        })
        .catch(err => {
            console.log(err);
        })
    }
}


Seeding.seedStudents()
Seeding.seedTeachers()
// Seeding.seedSubjects()