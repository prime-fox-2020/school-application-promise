const pool = require('../config/connection');

class Model {
    static showData(table) {
        return new Promise((res, rej) => {
            let query = `SELECT * FROM "${table}" ORDER BY "id"`;

            pool.query(query, (err, data) => {
                if (err) rej(err);
                else res(data.rows);
            });
        });
    }

    static editData(table, id) {
        return new Promise((res, rej) => {
            let query = `SELECT * FROM "${table}" WHERE "id" = $1`

            pool.query(query, [id], (err, data) => {
                if (err) rej(err);
                else {
                    if (table == 'students') {
                        let obj = {
                            Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
                            Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
                        }
                        let newDate = String(data.rows[0].birth_date).split(' ');
                        let tgl = `${newDate[3]}-${obj[newDate[1]]}-${+newDate[2] + 1}`;
                        data.rows[0].birth_date = tgl;
                    }
                    res(data.rows[0]);
                }
            });
        });


    }

    static dataPost(table, data, id) {
        return new Promise((res, rej) => {
            if (table == 'teachers') {
                if (data.first_name == '') res('Input your first name');
                else if (data.last_name == '') res('Input your last name');
                else if (data.email == '') res('Input your email');
                else {
                    let query = `INSERT INTO "teachers" ("first_name", "last_name", "email", "gender") VALUES ($1, $2, $3, $4)`;
                    if (id) query = `UPDATE "teachers" SET "first_name" = $1, "last_name" = $2, "email" = $3, "gender" = $4 WHERE "id" = ${id}`;

                    const params = [data.first_name, data.last_name, data.email, data.gender];
                    pool.query(query, params, (err, data) => {
                        if (err) rej(err);
                        else {
                            if (id) res(`Data dengan id ${id} berhasil diedit`);
                            else res('Data berhasil ditambahkan');
                        }
                    });
                }
            }
            else if (table == 'students') {
                if (data.first_name == '') res('Input your first name');
                else if (data.last_name == '') res('Input your last name');
                else if (data.email == '') res('Input your email');
                else if (data.birth_date == '') res('Input your birth_date');
                else {
                    let check = data.birth_date.split('-');
                    let cond = 0;
                    if (check.length > 1) {
                        if (check[0].length === 4 && !isNaN(+check[0]) && +check[0] < 2016) cond++;
                        if (check[1].length === 2 && !isNaN(+check[1]) && +check[1] < 13) cond++;
                        if (check[2].length === 2 && !isNaN(+check[2]) && +check[2] < 32) cond++;
                    }
                    let birth_date = new Date(data.birth_date)
                    if (cond !== 3 || birth_date == 'Invalid Date') res('Wrong date format');
                    else {
                        let query = `INSERT INTO "students" ("first_name", "last_name", "email", "gender", "birth_date") VALUES ($1, $2, $3, $4, $5)`;
                        if (id) query = `UPDATE "students" SET "first_name" = $1, "last_name" = $2, "email" = $3, "gender" = $4, "birth_date" = $5 WHERE "id" = ${id}`;

                        const params = [data.first_name, data.last_name, data.email, data.gender, birth_date];
                        pool.query(query, params, (err, data) => {
                            if (err) callback(err);
                            else {
                                if (id) res(`Data dengan id ${id} berhasil diedit`);
                                else res('Data berhasil ditambahkan');
                            }
                        });
                    }
                }
            }
            else if (table == 'subjects') {
                if (data.subject_name == '') res('Input subject name');
                else {
                    let query = `INSERT INTO "subjects" ("subject_name") VALUES ($1)`;
                    if (id) query = `UPDATE "subjects" SET "subject_name" = $1 WHERE "id" = ${id}`;

                    const params = [data.subject_name];
                    pool.query(query, params, (err, data) => {
                        if (err) callback(err);
                        else {
                            if (id) res(`Data dengan id ${id} berhasil diedit`);
                            else res('Data berhasil ditambahkan');
                        }
                    });
                }
            }
        });


    }

    static delete(table, id) {
        return new Promise((res, rej) => {
            let query = `DELETE FROM "${table}" WHERE "id" = $1`;

            pool.query(query, [id], (err, data) => {
                if (err) rej(err);
                else res(`Data dengan id ${id} berhasil dihapus`);
            })
        });
    }
}

module.exports = Model;