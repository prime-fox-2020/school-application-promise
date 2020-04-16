const StudentModel = require('../models/studentModel')

class StudentController{
    
    static studentListGet(req, res){
        StudentModel.getStudentList()
        .then(data => {
            // console.log(data)
            res.render('studentpage',{data})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }
    
    static addStudentGet(req,res){
        const error = req.query.error
        res.render('addstudent',{error})
    }
    
    static addStudentPost(req,res){
        StudentModel.addStudentPost(req.body)
        .then(  res.redirect('/student') )
        .catch(rej => {
            console.log(rej)
            if (Array.isArray(rej)){
                res.redirect(`/student/add?error=${rej.join(', ')}`)
            } else {
                res.render('errorpage',{error})
            }
        })
    }

    static editStudentGet(req,res){
        const error = req.query.error
        StudentModel.editStudentGet(Number(req.params.id))
        .then(data=> {
            res.render('editstudent',{data, error})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }

    static editStudentPost(req,res){
        const updatedStudent = {
            id : Number(req.params.id),
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            gender : req.body.gender,
            birth_date : req.body.birth_date
        }
        StudentModel.editStudentPost(updatedStudent)
        .then( res.redirect('/student') )
        .catch(err => {
            if(Array.isArray(err)){
                res.redirect(`/student/${req.params.id}/edit?error=${err.join(', ')}`)
            } else {
                res.render('errorpage',{error:err})
            }
        })
    }

    static deleteStudentGet(req,res){
        StudentModel.deleteStudentGet(Number(req.params.id))
        .then(res.redirect('/student'))
        .catch(error => {
            res.render('errorpage',{error})
        })
    }

    static emailStudentGet(req,res){
        StudentModel.emailStudentGet(req.params.email)
        .then(data => {
            console.log(data)
            res.render('studentpage', {data})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })
    }
}

module.exports = StudentController