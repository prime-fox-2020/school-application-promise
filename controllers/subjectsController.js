const SubjectsModel = require('../models/subjectsModel')

class SubjectsController {
    static getSubjects(req, res) {
        SubjectsModel.getSubjects((err, data) => {
            if(err) {
                res.render('eror.ejs', {eror : err})
            } else {
                res.render('subjects.ejs', {data})
            }
        })
    }

    static idSubjects(req, res) {
        SubjectsModel.idSubjects(req.params.id, (err, data)=> {
            if(err){
                res.render('eror.ejs', {eror : err})
            } else {
                res.render('subjects.ejs', {data})
            }
        })
    }
}

module.exports = SubjectsController