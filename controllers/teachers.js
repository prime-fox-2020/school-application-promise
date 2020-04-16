const Teacher = require('../models/teachers');

class TeacherController {
    static list(req, res) {
        Teacher.list().then(data => {
            res.render('teachers.ejs', {teachers: data});
        }).catch(err => {
            res.send(err);
        })
    }

    static getById(req, res) {
        const findId = Number(req.params.id);
        Teacher.getById(findId).then(teacher => {
            if(teacher) {
                res.send(teacher);
            } else {
                res.send('Teacher not found');
            }
        }).catch(err => {
            res.send(err);
        });
    }
}

module.exports = TeacherController; 