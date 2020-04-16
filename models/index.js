'use strict'

const fs = require('fs');
const {Pool} = require('pg')
const pool = new Pool({ user: 'node', host: 'localhost', database: 'sapmvc', password: 'hacktiv8tugas', port: 5432 })

class Teachers {
    constructor(first_name, last_name, email, gender) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
    }
}

class Students {
    constructor(first_name, last_name, email, gender, birth_date) {
        this.first_name = first_name
        this.last_name = last_name
        this.email = email
        this.gender = gender
        this.birth_date = birth_date
    }
}

class Subjects {
    constructor(subject_name) {
        this.subject_name = subject_name
    }
}

class Result {
    constructor(redirectPage, content, error = false) {
        this.redirect = redirectPage
        this.content = content
        this.error = error
    }
}

class Backend {

    static executeQuery = query => new Promise((resolve, reject) => {

        pool.connect()
            .then(client => {
                return client.query(query)
                    .then(result => {
                        client.release();
                        resolve(result.rows)
                    })
                    .catch(err => {
                        client.release();
                        reject(err)
                    })
            })

    })

    static validation = (tableSelection, when, actionType, content) => {

        let Error = '';

        Object.keys(content).forEach(el => {

            if (content[el].trim() == '') {

                Error = new Result(`/${tableSelection}/${when}?${actionType}&status=error&on=${el}`, content, true);
                return;

            }

            if (el == 'email' && content[el].indexOf('@') == -1) {
                
                Error = new Result(`/${tableSelection}/${when}?${actionType}&status=error&detail=invalid_email`, content, true);
                return;

            }

            if (el == 'birth_date') {
                if (content[el].indexOf('/') == -1 || Number(content[el].split('/')[1]) > 12) {
                    Error = new Result(`/${tableSelection}/${when}?${actionType}&status=error&detail=invalid_date_format`, content, true);
                    return;
                }
            }
        })

        return Error;

    }

    static show = (tableSelection) => new Promise((resolve, reject) => {
        let SQL = `SELECT * FROM ${tableSelection} ORDER BY id ASC;`;
        this.executeQuery(SQL)
            .then(result => resolve(result))
            .catch(err => reject(err))
    })

    static findById = (tableSelection, id) => new Promise((resolve, reject) => {

        let SQL = `SELECT * FROM ${tableSelection} WHERE id = ${Number(id)};`
        this.executeQuery(SQL)
            .then(result => resolve(result))
            .catch(err => reject(err))

    })

    static newData = (tableSelection, content) => new Promise((resolve, reject) => {

        // validate the input
        const input = this.validation(tableSelection, 'add', 'action=Register', content)

        if (input.error) {
            return resolve(input)
        }
        
        const column = () => {
            switch (tableSelection) {
                case 'teachers' : return Object.keys(new Teachers());
                case 'students' : return Object.keys(new Students());
                case 'subjects' : return Object.keys(new Subjects());
            }
        }

        const expandValue = () => {
            let value = '';
            for (let i = 1; i <= Object.values(content).length; i++) {
                value += `$${i}, `
            }

            return value.trim().replace(/,$/g, '');
        }

        let SQL = {
            text: `INSERT INTO ${tableSelection} (${column()}) VALUES (${expandValue()})`,
            values : Object.values(content),
        }

        this.executeQuery(SQL)
            .then(() => resolve(new Result(`/${tableSelection}?action=Register&succeeded=true`, content)))
            .catch(err => reject(err))

    })

    static delete = (tableSelection, id) => new Promise((resolve, reject) => {

        let SQL = `DELETE FROM ${tableSelection} WHERE id = ${Number(id)}`;

        this.executeQuery(SQL)
            .then(() => resolve(`/${tableSelection}?action=delete&id=${id}&succeeded=true`))
            .catch(err => reject(err))

    })

    static update = (tableSelection, content) => new Promise((resolve, reject) => {

        // validate the input
        const input = this.validation(tableSelection, 'edit', `id=${content.id}`, content)

        if (input.error) {
            return resolve(input)
        }

        const columnToUpdate = () => {
            let cache = '';
            Object.keys(content).forEach(el => {
                if (content.hasOwnProperty(el) && el !== 'id') {
                    cache += `${el} = '${content[el]}', `
                }
            })

            return cache.trim().replace(/,$/g, '');
        }

        let SQL = `UPDATE ${tableSelection} SET ${columnToUpdate()} WHERE id = ${content.id};`;

        this.executeQuery(SQL)
            .then(() => resolve(new Result(`/${tableSelection}?action=update&id=${content.id}&succeeded=true`, content)))
            .catch(err => reject(err))

    })
}

module.exports = Backend