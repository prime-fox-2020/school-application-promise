const pool = require('./config/connection');

const teachersTableSql = `
CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    gender VARCHAR(6)
);
`;

const studentsTableSql = `
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    gender VARCHAR(6),
    birth_date VARCHAR(50)
);
`;

const subjectsTableSql = `
CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    subject_name VARCHAR(50)
);
`;

pool.query(teachersTableSql).then(res => {
    console.log('Table "teachers" created successfully');
    return pool.query(studentsTableSql);
}).then(res => {
    console.log('Table "students" created successfully');
    return pool.query(subjectsTableSql);
}).then(res => {
    console.log('Table "subjects" created successfully');
    return pool.end();
}).catch(err => {
    throw err;
}) 