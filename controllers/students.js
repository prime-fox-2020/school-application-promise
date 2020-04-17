const StudentModel = require("../models/studentsModel")

class ControllerStudents {
    static get(req, res) {
        StudentModel.getStudents()
        .then(data => {
            res.render("students", { students: data, alert : req.query})
        })
        .catch(err => {
            res.render('error',{error:err})
        })
    }

    static create(req, res) {
        const error = req.query.error
        res.render('addStudent', {error})
    }

    static add(req, res) {
        StudentModel.add(req.body)
        .then(data => {
            res.redirect(`/students?message=${data}&type=success`)
        })
        .catch(err => {
            if (Array.isArray(err)){
                res.redirect(`/students/add?error=${err.join(', ')}`)
            } else {
                res.render('error',{error:err})
            }
        })
    }

    static destroy(req, res) {
        StudentModel.delete(req.params.id)
        .then(data => {
            res.redirect(`/students?message=${data}&type=success`)
        })
        .catch(err => {
            res.render('error',{error:err})
        })
    }

    static formEdit(req, res) {
        const error = req.query.error
        StudentModel.getStudents(Number(req.params.id))
        .then(data => {
            res.render('editStudent', {students: data, error})
        })
        .catch(err => {
            res.render('error',{error:err})
        })
    }

    static update(req, res) {
        StudentModel.update(Number(req.body.studentId))
        .then(data => {
            res.redirect(`/students?message=${data}&type=success`)
        })
        .catch(err => {
            if(Array.isArray(err)){
                res.redirect(`/students/${req.body.studentId}/edit?error=${err.join(', ')}`)
            } else {
                res.render('error',{error:err})
            }
        })
    }

    static getEmail(req, res){
        StudentModel.getEmail(req.params.email)
        .then(data => {
            res.render('students', {students: data, alert : req.query})
        })
        .catch(err => {
            res.render('error',{error:err})
        })
    }
}

module.exports = ControllerStudents