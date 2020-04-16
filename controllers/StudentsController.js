const StudentModel = require('../models/StudentModel')

class StudentsController {
    static showList(req, res) {
        const msg = req.query.msg;
        StudentModel.getList(req, (err, studentList) => {
            if (err) res.render('error', {msg: err});
            else {
                if (studentList.length > 0) {
                    res.render('students', {studentList, msg});
                } else {
                    res.render('students', {studentList, msg: `Student with email: ${req.params.email} not found!`});
                }
            }
        });
    }

    static editGet(req, res) {
        const msg = req.query.msg;
        StudentModel.editGet(req, (err, student) => {
            if (err) res.render('error', {msg: err});
            else res.render('edit_student', {student, msg});
        });
    }
    static editPost(req, res) {
        if (req.body.first_name && req.body.last_name && req.body.email && req.body.gender && req.body.birth_date) {
            StudentModel.editPost(req, (err) => {
                if (err) res.render('error', {msg:err});
                else res.redirect(`/students?msg=Successfully update student data with id ${req.params.id}`);
            });
        } else {
            res.redirect(`/students/edit/${req.params.id}?msg=All information must be filled`);
        }
    }

    static addGet(req, res) {
        const msg = req.query.msg;
        res.render('add_student', {msg});
    }
    static addPost(req, res) {
        if (req.body.first_name && req.body.last_name && req.body.email && req.body.gender && req.body.birth_date) {
            StudentModel.addPost(req, (err) => {
                if (err) res.render('error', {msg:err});
                else res.redirect('/students?msg=Student data successfully added to the list');
            })
        } else {
            res.redirect('/students/add?msg=All information must be filled');
        }
    }

    static deleteGet(req, res) {
        StudentModel.deleteGet(req, (err, deleteResult) => {
            if (err) res.redirect(`/students?msg=Delete student with id ${req.params.id} failed`);
            else res.redirect(`/students?msg=Delete student with id ${req.params.id} successful`);
        });
    }
}

module.exports = StudentsController;