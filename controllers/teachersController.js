const TeachersModel = require('../models/teachersModel')

class TeachersController {
    static getteachers(req, res) {
        TeachersModel.getteachers((err, data) => {
            if(err) {
                res.render('eror.ejs', {eror : err})
            } else {
                res.render('teachers.ejs', {data})
            }
        })
    }

    static idTeachers(req, res) {
        TeachersModel.idTeachers(req.params.id, (err, data)=> {
            if(err){
                res.render('eror.ejs', {eror : err})
            } else {
                res.render('teachers.ejs', {data})
            }
        })
    }
}

module.exports = TeachersController