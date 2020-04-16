const studentsModels = require("../models/studentsModel")


class StudentsController {
    static showStudentsData(req, res) {
        studentsModels.showStudents((err, data) => {
            if (err) {
                res.render("error")
            } else {
                res.render("students", { students: data })
            }
        })
    }
    static findStudentByEmail(req, res) {
        studentsModels.findStudentByEmail(req.params.email, (err, data) => {
            if (err) {
                res.render("error")
            } else {
                res.render("students", { students: data })
            }
        })
    }

    static addStudentsData(req, res) {
        const error = req.query.error;
        // console.log(error)
        res.render("add", { error })
    }


    static postAddStudentsData(req, res) {
        studentsModels.postAddStudentsData(req.body, (err, data) => {
            if (err) {
                if (Array.isArray(err)) {
                    res.redirect(`/students/add?error=${err.join(', ')}`)
                } else {
                    res.render("error")
                }
            } else {
                res.redirect("/students")
            }
        })
    }

    static editStudentById(req, res) {
        studentsModels.editStudentById(req.params.id, req.query.error,(err, data) => {
            if (err) {
                res.render("error")
            } else {
                res.render("edit", data)
            }
        })
    }

    static postAfterEdit(req, res) {
        studentsModels.postAfterEdit(req.body, req.params.id, (err, data) => {
            if (err) {
                if (Array.isArray(err)) {
                    res.redirect(`/students/${req.params.id}/edit?error=${err.join(', ')}`)
                } else {
                    res.render("error")
                }
            } else {
                res.redirect("/students")
            }
        })
    }

    static deleteStudentsData(req, res) {
        studentsModels.deleteStudentsData(req.params.id, (err, data) => {
            if (err) {
                res.render("error")
            } else {
                res.redirect("/students")
            }
        })
    }
}

module.exports = StudentsController