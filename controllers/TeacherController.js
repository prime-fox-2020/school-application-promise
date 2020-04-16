const TeacherModel = require('../models/TeacherModel')

class TeacherController{
    static get(req, res){
        TeacherModel.get()
        .then(data =>{
            res.render('teacher', {object: data})
        })
        .catch(err =>{
            rej(err =>{
                res.send(err)
            })
        })
    }
}

module.exports = TeacherController