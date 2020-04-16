const SubjectModel = require('../models/SubjectModel');

class SubjectsController {
    static showList(req, res) {
        SubjectModel.getList(req, (err, subjectList) => {
            if (err) res.render('error', {msg: err});
            else {
                if (subjectList.length > 0) {
                    res.render('subjects', {subjectList, msg: null});
                } else {
                    res.render('subjects', {subjectList, msg: `Subject with id: ${req.params.id} not found!`});
                }
            }
        });
    }
}

module.exports = SubjectsController;