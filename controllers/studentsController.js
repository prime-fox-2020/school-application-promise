const StudentsModel = require('../models/studentsModel')

class StudentsController{
    static getStudents(req, res) {
        StudentsModel.getStudents()
        .then( data => {
            res.render('students.ejs', {data})
        })
        .catch(err => {
            res.render('eror.ejs', {eror : err})
        })
    }

    static addStudentsGet(req, res) {
        const error= req.query.error
        res.render('addStudents.ejs', {error})
    }

    static addStudentsPost(req, res) {
        StudentsModel.addStudentsPost(req.body)
        .then(() => {
            res.redirect('/students')
        })
        .catch( err => {
            if(Array.isArray(err)) {
                res.redirect(`/students/add?error=${err.join(',')}`)
            }
        })
    }

    static editStudentsGet(req, res) {
        StudentsModel.editStudentsGet(Number(req.params.id))
        .then(data => {
            //let id= Number(req.params.id)
            res.render('editStudents.ejs', {data})
        })
        .catch((err => {
            es.render('eror.ejs', {eror : err})
        }))
    }

    static editStudentsPost(req, res) {
        StudentsModel.editStudentsPost(req)
        .then((data) => {
            res.redirect('/students')
        })
        .catch((err) => {
            res.render('eror.ejs', {eror : err})
        })
    }

    static deleteStudents(req, res) {
        StudentsModel.deleteStudents(Number(req.params.id))
        .then(() => {
            res.redirect('/students')
        })
        .catch(err => {
            res.render('eror.ejs', {eror : err})
        })
    }

    static emailStudents(req, res) {


        StudentsModel.emailStudents(req.params.email)
        .then((data) => {
            res.render('students', {data})
        })
        .catch((err) => {
            res.render('eror.ejs', {eror : err})
        })
    }
}

module.exports = StudentsController

