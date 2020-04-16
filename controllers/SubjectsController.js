const ModelSubjects = require('../models/ModelSubjects')

class SubjectsController{
    static getPage(req, res){
        ModelSubjects.getSubjects( (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('subjects', {data})
            }
        })
    }

    static pageWithId(req, res){
        ModelSubjects.getSubjectId (Number(req.params.id), (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('subjects', {data})
            }
        })
    }
}

module.exports = SubjectsController