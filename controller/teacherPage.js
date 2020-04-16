const teachersModel = require('../models/teachersModel')

class TeachersController {
    static getTeacherList (req, res) {
        teachersModel.getTeachers()
        .then(data => {
            res.render('teachers.ejs', { data: data.rows })
        })
        .catch(err => {
            res.send(err, 'Data not found')
        })
    }

    static getTeachersId (req, res) {
        teachersModel.getTeachersId(req.params.id)
        .then(data => {
            res.send(data.rows)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TeachersController;