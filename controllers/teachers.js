const TeachersModel = require('../models/teachers')

class TeachersController {
    static getAll(req, res) {
        TeachersModel.getAll()
            .catch(err => {res.render('error', {error: err})})
            .then(data => {res.render('teachers', { teachers : data })})
    }

    static getByID(req, res) {
        TeachersModel.getByID(req.params.id)
            .catch(err => {res.render('error', {error: err})})
            .then(data => {res.render('teachers', { teachers : data })})
    }
}

module.exports = TeachersController