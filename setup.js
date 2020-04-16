const db = require('./config/connection');
const promise = [];

const stundentQuery = `CREATE TABLE students ("id" SERIAL PRIMARY KEY, 
"first_name" VARCHAR(20) NOT NULL, 
"last_name" VARCHAR(40) NOT NULL, 
"email" VARCHAR(50) NOT NULL, 
"gender" VARCHAR(10) NOT NULL,
"birth_date" VARCHAR(20) NOT NULL)`;
db.query(stundentQuery, (err) => {
    if (err) console.log(err);
    else {
        console.log("Create students table success");
        promise.push(true);
        if (promise.length == 3) db.end();
    }
});

const teacherQuery = `CREATE TABLE teachers ("id" SERIAL PRIMARY KEY, 
"first_name" VARCHAR(20) NOT NULL, 
"last_name" VARCHAR(40) NOT NULL, 
"email" VARCHAR(50) NOT NULL, 
"gender" VARCHAR(10) NOT NULL)`;
db.query(teacherQuery, (err) => {
    if (err) console.log(err);
    else {
        console.log("Create teachers table success");
        promise.push(true);
        if (promise.length == 3) db.end();
    }
});

const subjectQuery = `CREATE TABLE subjects ("id" SERIAL PRIMARY KEY, 
"subject_name" VARCHAR(20) NOT NULL)`;
db.query(subjectQuery, (err) => {
    if (err) console.log(err);
    else {
        console.log("Create subject table success");
        promise.push(true);
        if (promise.length == 3) db.end();
    }
});