const studentsModel = require('../models/studentsModel')


class StudentsController {
    static getStudentsList (req, res) {
        studentsModel.read()
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
        studentsModel.update(req.body)
        .then (data => {
            res.redirect('/students')
        })
        .catch (err => {
            res.send(err)
        })
    }

    static getEditStudent (req, res) {
        studentsModel.readEditStudents(req.params.id)
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
        studentsModel.updateEditStudents(id, first_name, last_name, email)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteStudent (req, res) {
        studentsModel.delete(req.params.id)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('Unable to delete data')
        })
    }

    static getEmail (req, res) {
        studentsModel.readEmail(req.params.email)
        .then(data => {
            res.render('students.ejs', {data: data.rows})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = StudentsController;