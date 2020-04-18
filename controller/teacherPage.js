const teachersModel = require('../models/teachersModel')

class TeachersController {
    static getTeacherList (req, res) {
        teachersModel.read()
        .then(data => {
            res.render('teachers.ejs', { data: data.rows })
        })
        .catch(err => {
            res.send(err, 'Data not found')
        })
    }

    static getTeachersId (req, res) {
        teachersModel.readTeachersId(req.params.id)
        .then(data => {
            res.render('teachers.ejs', { data: data.rows })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = TeachersController;