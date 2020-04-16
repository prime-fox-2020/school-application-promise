const SubjectModel = require('../models/SubjectModel');

class SubjectsController {
    static showList(req, res) {
        SubjectModel.getList(req)
        .then(subjectList => {
            if (subjectList.length > 0) {
                res.render('subjects', {subjectList, msg: null});
            } else {
                res.render('subjects', {subjectList, msg: `Subject with id: ${req.params.id} not found!`});
            }
        })
        .catch(err => res.render('error', {msg: err}));
    }
}

module.exports = SubjectsController;