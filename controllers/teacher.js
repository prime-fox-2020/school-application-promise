const TeacherModel = require('../models/teacher');

class Teacher {
    static show(req, res) {
        // res.send('ini di student controller')
        TeacherModel.read((err, data) => {
            if (err) {
                res.send(err)
            } else {
                // console.log(data);
                res.render('teachers', { teachers: data })
            }
        })
    }
}

module.exports = Teacher;
