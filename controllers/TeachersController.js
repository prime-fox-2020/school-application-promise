const ModelTeachers = require('../models/ModelTeachers')

class TeachersController{
    static getPage(req, res){
        ModelTeachers.getTeachers()
        .then( data => {
            res.render('teachers', {data})
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }
    static pageWithId(req, res){
        ModelTeachers.getTeacherId (Number(req.params.id))
        .then( data => {
            res.render('teachers', {data})
        })
        .catch ( err => {
            res.render('error', {error: err})
        })
    }
}

module.exports = TeachersController