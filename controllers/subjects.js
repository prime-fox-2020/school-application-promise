const SubjectsModel = require('../models/subjects')

class SubjectsController {
    static getAll(req, res) {
        SubjectsModel.getAll()
            .catch(err => {res.render('error', {error: err})})
            .then(data => {res.render('subjects', { subjects : data })})
    }

    static getByID(req, res) {
        SubjectsModel.getByID(req.params.id)
            .catch(err => {res.render('error', {error: err})})
            .then(data => {res.render('subjects', { subjects : data })})
    }
}

module.exports = SubjectsController