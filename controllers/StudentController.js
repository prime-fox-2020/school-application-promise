const StudentModel = require('../models/StudentModel')

class StudentController{
    static get(req, res){
        StudentModel.get()
        .then(data =>{
            // res.send(data)
            res.render('student', {object: data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addForm(req, res){
        res.render('addform')
    }
    static add(req, res){
        // res.send(req.body)
        StudentModel.add(req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date)
        .then(res.redirect('/student'))
        .catch(err =>{
            res.send(err)
        })
    }

    static editForm(req, res) {
        StudentModel.editForm(Number(req.params.id))
        .then(data =>{
            res.render('editform', {object: data})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static edit(req, res){
        StudentModel.edit(req.body.first_name, req.body.last_name, req.body.email, req.body.gender, req.body.birth_date, req.params.id)
        .then(res.redirect('/student'))
        .catch(err =>{
            res.send(err)
        })
    }

    static delete(req, res){
        StudentModel.delete(Number(req.params.id))
        .then(res.redirect('/student'))
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = StudentController