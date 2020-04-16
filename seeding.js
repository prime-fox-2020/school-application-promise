const fsPromises = require('fs').promises;
const db = require('./config/connection');

const studentsQuery = 'INSERT INTO students ("first_name", "last_name", "email", "gender", "birth_date") VALUES ';
const teachersQuery = 'INSERT INTO teachers ("first_name", "last_name", "email", "gender") VALUES ';
const subjectsQuery = 'INSERT INTO subjects ("subject_name") VALUES ';

function insertData(path, query) {
    return new Promise((resolve, reject) => {
        fsPromises.readFile(path, 'utf8')
        .catch(err => {
            console.log(`\nFailed to read data from ${path}`);
            reject(err.stack);
        })
        .then(data => {
            const insertQuery = makeQuery(query, JSON.parse(data));
            db.query(insertQuery)
            .then(data => {
                console.log(`\nData from ${path} successfuly added to table`);
                resolve(data);
            })
            .catch(err => {
                console.log(`\nFailed to add data from ${path}`);
                reject(err.stack);
            });
        });
    })
}

function makeQuery(query, data) {
    for (let [i, entry] of data.entries()) {
        data[i] = Object.values(entry);
        data[i].shift();
        for (let [j, value] of data[i].entries()) {
            if (isNaN(+value)) data[i][j] = `'${value}'`;
        }
        data[i] = `(${data[i].join(', ')})`;
    }
    return query + data.join(', ');
}

insertData('./data/students.json', studentsQuery)
.catch(err => console.log(err))
.then(data => insertData('./data/teachers.json', teachersQuery))
.catch(err => console.log(err))
.then(data => insertData('./data/subjects.json', subjectsQuery))
.catch(err => console.log(err))
.then(() => db.end());