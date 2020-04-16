const ModelSubjects = require('../models/ModelSubjects')

class SubjectsController{
    static getPage(req, res){
        ModelSubjects.getSubjects()
        .then( data => {
            res.render('subjects', {data})
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }

    static pageWithId(req, res){
        ModelSubjects.getSubjectId(Number(req.params.id))
        .then( data => {
            res.render('subjects', {data})
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }
}

module.exports = SubjectsController