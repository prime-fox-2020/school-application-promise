const subjectModel = require('../models/subjectModel')

class SubjectController {
    static getSubjectList (req, res) {
        subjectModel.getSubject()
        .then(data => {
            res.render('subject.ejs', {data: data.rows})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectController;