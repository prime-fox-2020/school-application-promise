const TeachersModel = require('../models/TeacherModel');

class TeachersController {
    static showList(req, res) {
        TeachersModel.getList(req, (err, teacherList) => {
            if (err) res.render('error', {msg: err});
            else {
                if (teacherList.length > 0) {
                    res.render('teachers', {teacherList, msg: null});
                } else {
                    res.render('teachers', {teacherList, msg: `Teacher with id: ${req.params.id} not found!`});
                }
            }
        });
    }
}

module.exports = TeachersController;