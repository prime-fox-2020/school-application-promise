const studentsModel = require('../models/studentsModel')


class StudentsController {
    static getStudentsList (req, res) {
        studentsModel.getStudents()
        .then(data => {
            res.render('students.ejs', {data})
        })
        .catch (err => {
            res.send(err)
        })
    }

    static addStudent (req, res) {
        res.render('add_student.ejs')
    }

    static postStudent (req, res) {
        studentsModel.studentPost(req.body)
        .then (data => {
            res.redirect('/students')
        })
        .catch (err => {
            res.send(err)
        })
    }

    static getEditStudent (req, res) {
        studentsModel.editStudents(req.params.id)
        .then (data => {
            res.render('edit_student.ejs', {
                paramId : req.params.id,
                populatedStudent : data.rows
            })
        })
        .catch (err => {
            res.send(err)
        })
    }

    static postEditStudent (req, res) {
        let id = req.params.id;
        let first_name = req.body.firstname;
        let last_name = req.body.lastname;
        let email = req.body.email;
        studentsModel.postEditStudents(id, first_name, last_name, email)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteStudent (req, res) {
        studentsModel.deleteStudent(req.params.id)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('Unable to delete data')
        })
    }

    static getEmail (req, res) {
        studentsModel.getEmail(req.params.email)
        .then(data => {
            res.send(data.rows)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentsController;