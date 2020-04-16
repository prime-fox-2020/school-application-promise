const StudentModel = require('../models/student');

class Student {
    static show(req, res) {
        // res.send('ini di student controller')
        StudentModel.read()
            .then(data => {
                const msg = req.query.msg
                res.render('students', { students: data, msg: msg })
            })
            .catch(err => {
                res.send(err)
            })

    }

    static addGet(req, res) {
        const error = {}
        res.render('addStudent', { error })
    }

    static addPost(req, res) {
        // console.log(req.body);
        StudentModel.add(req.body)
            .then(msg => {
                console.log('msg: ', msg);
                res.redirect(`/students?msg=${msg}`)
            })
            .catch(err => {
                res.render(`addStudent`, { error: err })
            })
    }

    static delete(req, res) {
        StudentModel.delete(req.params.id)
        .then(msg => {
            res.redirect(`/students?msg=${msg}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req, res) {
        StudentModel.edit(req.params.id)
        .then((data) => {
            let err = {}
            console.log(data);
            res.render('editStudent', { student: data, error: err })
        }).catch((err) => {          
            req.send(err)
        });
    }

    static editPost(req, res) {
        StudentModel.update(req)
        .then((data) => {
            res.redirect(`/students?msg=${data}`)
        }).catch((err) => {
            data.id = req.params.id
            data.birth_date = new Date(data.birth_date);
            res.render('editStudent', { student: data, error: err })
        });
    }

    static emailPost(req, res) {
        StudentModel.emailPost(req.body.email)
        .then((data) => {
            res.render('students', { students: [data], msg: {} })
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = Student;