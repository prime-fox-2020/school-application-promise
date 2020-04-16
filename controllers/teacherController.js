const TeacherModel = require('../models/teacherModel')

class TeacherController{
    // static teacherListGet(req, res){
    //     TeacherModel.getTeacherList((err,data) =>{
    //         if (err){
    //             res.render('errorpage', { error : err} )
    //         } else {
    //             res.render('teacherpage', {data})
    //         }
    //     })
    // }
    static teacherListGet(req, res){
        TeacherModel.getTeacherList()
        .then(result => {
            res.render('teacherpage', {data:result.rows})
        })
        .catch(error => {
            res.render('errorpage', { error} )
        })
    }

    // static teacherListIdGet(req,res){
    //     TeacherModel.getTeacherIdList(Number(req.params.id), (err,data) => {
    //         if (err){
    //             res.render('errorpage', {error:err})
    //         } else {
    //             res.render('teacherpage',{data})
    //         }
    //     })
    // }
    static teacherListIdGet(req,res){
        TeacherModel.getTeacherIdList(Number(req.params.id))
        .then(result => {
            res.render('teacherpage',{data:result.rows})
        })
        .catch(error => {
            res.render('errorpage', {error})
        })
    }
}

module.exports = TeacherController