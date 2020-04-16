let Model = require('../models/teachersModel')

class TeacherController {
    static getTeacher(req,res){
        Model.readTeacher((err,data)=>{
            if(err) res.send(err)

            res.render('teachers.ejs', {data: data})
        })
    }

    static getTeacherId(req,res){
        Model.readTeacherId(req.params.id, (err,data)=>{
            if(err) res.send(err)

            console.log(data) //sampe sini gk salah
            res.render('teachers.ejs', {data: data})
        })
    }
}

module.exports = TeacherController