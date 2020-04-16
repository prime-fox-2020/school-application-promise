const pool = require('../config/conection');

class Student {
    constructor(first_name, last_name, email, gender, birth_date) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
        this.birth_date = birth_date
    }

    getFullName() {
        let fullName = this.first_name + ' ' + this.last_name
        return fullName
    }

    static validate(data, cb) {
        console.log('data: ', data);
        let error = {}
        if (!data.first_name) {
            error.first_name = `First name harus diisi`
        }
        if (!data.last_name) {
            error.last_name = `Last name harus diisi`
        }
        if (!data.email) {
            error.email = `Email harus diisi`
        } else if (!data.email.includes('@')) {
            error.email = `Email harus menggunakan '@`
        }

        if (data.gender == 'null') {
            error.gender = `Gender harus diisi`
        }
        if (!data.birth_date) {
            error.birth_date = `Birth date harus diisi`
        } else {
            let birthDate = data.birth_date.split('-')
            let year = birthDate[0]
            let mount = Number(birthDate[1])
            let day = Number(birthDate[2])
            // console.log(year, mount, day);
            if (year.length != 4) {
                error.birth_date = `Format Year salah`
            }
            else if (mount < 0 || mount > 12) {
                error.birth_date = `Format Mount salah`
            } else if (day < 0 || day > 31) {
                error.birth_date = `Format Date salah`
            }
        }
        console.log('error: ', error);
        cb(error, true)
    }

    static read(cb) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM students ORDER BY id asc',
                (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res.rows)
                    }
                })
        });
    }

    static add(el, cb) {
        return new Promise((resolve, reject) => {
            this.validate(el, (err, data) => {
                if (Object.values(err).length > 0) {
                    reject(err)
                } else {
                    pool.query(`INSERT INTO students (first_name, last_name, email, gender, birth_date)
                    VALUES ('${el.first_name}', '${el.last_name}', '${el.email}', '${el.gender}', '${el.birth_date}')`,
                        (err, res) => {
                            if (err) {
                                reject(err)
                            } else {
                                let newStudent = new Student(el.first_name, el.last_name, el.email, el.gender, el.birth_date)
                                resolve(`${newStudent.getFullName()} success add`)
                            }
                        })
                }
            })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            pool.query(`DELETE FROM students WHERE id = ${Number(id)}`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(`Student with Id : ${id} success deleted`)
                }
            })
        });
    }

    static edit(id) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM students WHERE id = ${Number(id)}`,
                (err, res) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(res.rows[0])
                    }
                })
        });
    }

    static update(req) {
        return new Promise((resolve, reject) => {
            this.validate(req.body, (err, data) => {
                console.log('err: ', err);
                if (Object.values(err).length > 0) {
                    reject(err, req.body)
                } else {
                    pool.query(`UPDATE students
                        SET first_name = '${req.body.first_name}',
                            last_name = '${req.body.last_name}',
                            email = '${req.body.email}',
                            gender = '${req.body.gender}',
                            birth_date = '${req.body.birth_date}'
                        WHERE id = ${Number(req.params.id)}`, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(`Student with Id : ${req.params.id} success updated!`)
                        }
                    })
                }
            })
        });


    }

    static emailPost(email, cb) {
        return new Promise((resolve, reject) => {
            pool.query(`SELECT * FROM students WHERE email = '${email}'`, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res.rows[0])
                }
            })
        });
    }
}

module.exports = Student;
