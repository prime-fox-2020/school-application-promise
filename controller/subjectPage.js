const subjectModel = require('../models/subjectModel')

class SubjectController {
    static getSubjectList (req, res) {
        subjectModel.read()
        .then(data => {
            res.render('subject.ejs', {data: data.rows})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getSubjectId (req, res) {
        subjectModel.readId(req.params.id)
        .then(data => {
            res.render('subject.ejs', {data: data.rows})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectController;