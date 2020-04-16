const fs = require('fs');
const db = require('./config/connection');
const promise = [];

fs.readFile('./data/students.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    else {
        data = JSON.parse(data);
        for (let [i, entry] of data.entries()) {
            data[i] = Object.values(entry);
            data[i].shift();
            for (let [j, value] of data[i].entries()) {
                if (isNaN(+value)) data[i][j] = `'${value}'`;
            }
            data[i] = `(${data[i].join(', ')})`;
        }
        const studentQuery = `INSERT INTO students ("first_name", "last_name", "email", "gender", "birth_date") VALUES ${data.join(', ')}`;
        db.query(studentQuery, (err) => {
            if (err) console.log(err);
            else {
                console.log("Insert data to students table succes");
                promise.push(true);
                if (promise.length == 3) db.end();
            }
        })
    }
});

fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    else {
        data = JSON.parse(data);
        for (let [i, entry] of data.entries()) {
            data[i] = Object.values(entry);
            data[i].shift();
            for (let [j, value] of data[i].entries()) {
                if (isNaN(+value)) data[i][j] = `'${data[i][j]}'`;
            }
            data[i] = `(${data[i].join(', ')})`;
        }
        const teacherQuery = `INSERT INTO teachers ("first_name", "last_name", "email", "gender") VALUES ${data.join(', ')}`;
        db.query(teacherQuery, (err) => {
            if (err) console.log(err);
            else {
                console.log("Insert data to students table succes");
                promise.push(true);
                if (promise.length == 3) db.end();
            }
        })
    }
});

fs.readFile('./data/subjects.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    else {
        data = JSON.parse(data);
        for (let [i, entry] of data.entries()) {
            data[i] = Object.values(entry);
            data[i].shift();
            for (let [j, value] of data[i].entries()) {
                if (isNaN(+value)) data[i][j] = `'${data[i][j]}'`;
            }
            data[i] = `(${data[i].join(', ')})`;
        }
        const subjectQuery = `INSERT INTO subjects ("subject_name") VALUES ${data.join(', ')}`;
        db.query(subjectQuery, (err) => {
            if (err) console.log(err);
            else {
                console.log("Insert data to students table succes");
                promise.push(true);
                if (promise.length == 3) db.end();
            }
        })
    }
});