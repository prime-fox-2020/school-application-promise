const TeachersModel = require('../models/TeacherModel');

class TeachersController {
    static showList(req, res) {
        TeachersModel.getList(req)
        .then(teacherList => {
            if (teacherList.length > 0) {
                res.render('teachers', {teacherList, msg: null});
            } else {
                res.render('teachers', {teacherList, msg: `Teacher with id: ${req.params.id} not found!`});
            }
        })
        .catch(err => res.render('error', {msg: err}));
    }
}

module.exports = TeachersController;