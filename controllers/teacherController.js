const TeacherModel = require('../models/teacherModel');

class TeacherController{
    static read(req, res){
        TeacherModel.read()
            .then(data => {
                res.render('teacher', {data});
            })
            .catch(err => {
                res.render('error');
            })
    }

    static getId(req, res){
        TeacherModel.getId(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.render('error');
            }) 
    }
}

module.exports = TeacherController;