let Model = require('../models/subjectsModel')
class SubjectController {
    static getSubject(req,res){
        Model.readSubject()
        .then(data=>{
            res.render('../views/subjects.ejs', {data: data.rows, id: undefined})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static getSubjectId(req,res){
        Model.readSubject()
        .then(data=>{
            res.render('../views/subjects.ejs', {data: data.rows, id: req.params.id})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = SubjectController