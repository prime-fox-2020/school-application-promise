const ModelTeachers = require('../models/ModelTeachers')

class TeachersController{
    static getPage(req, res){
        ModelTeachers.getTeachers( (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('teachers', {data})
            }
        })
    }
    static pageWithId(req, res){
        ModelTeachers.getTeacherId (Number(req.params.id), (err, data) => {
            if(err){
                res.render('error', {error: err})
            }
            else{
                res.render('teachers', {data})
            }
        })
    }
}

module.exports = TeachersController