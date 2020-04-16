const db = require('./config/connection');

const students = `CREATE TABLE students ("id" SERIAL PRIMARY KEY, 
"first_name" VARCHAR(20) NOT NULL, 
"last_name" VARCHAR(40) NOT NULL, 
"email" VARCHAR(50) NOT NULL, 
"gender" VARCHAR(10) NOT NULL,
"birth_date" VARCHAR(20) NOT NULL)`;

const teachers = `CREATE TABLE teachers ("id" SERIAL PRIMARY KEY, 
"first_name" VARCHAR(20) NOT NULL, 
"last_name" VARCHAR(40) NOT NULL, 
"email" VARCHAR(50) NOT NULL, 
"gender" VARCHAR(10) NOT NULL)`;

const subjects = `CREATE TABLE subjects ("id" SERIAL PRIMARY KEY, 
"subject_name" VARCHAR(20) NOT NULL)`;

function makeTable(query) {
    return new Promise((resolve, reject) => {
        db.query(query)
        .then(data => {
            console.log("\nSuccesfully created table");
            resolve(data);
        })
        .catch(err => {
            console.log("\nFailed to create table");
            reject(err);
        })
    });
}

makeTable(students)
.catch(err => console.log(err.stack))
.then(data => makeTable(teachers))
.catch(err => console.log(err.stack))
.then(data => makeTable(subjects))
.catch(err => console.log(err.stack))
.then(() => db.end());