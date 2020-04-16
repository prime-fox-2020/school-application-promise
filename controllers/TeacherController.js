const TeacherModel = require('../models/TeacherModel')

class TeacherController{
    static get(req, res) {
        TeacherModel.get()
        .then(data => {
            return res.render('teacher', { object: data });
        })
        .catch(err => {
            throw err
        })
        // TeacherModel.get((err, data) => {
        //     if (err) {
        //         res.render('error', { err });
        //     } else {
        //         res.render('teacher', { object: data });
        //     }
        // })
    }

    static getById(req, res) {
        TeacherModel.getById(Number(req.params.id))
        .then(data => {
            return res.render('teacher', { object: data });
        })
        .catch(err => {
            throw err
        })
        // TeacherModel.getById(Number(req.params.id), (err, data) => {
        //     if (err) {
        //         res.render('error', { err });
        //     } else {
        //         res.render('teacher', { object: data });
        //     }
        // })
    }
}

module.exports = TeacherController;