'use strict'

const modelStudents = require('../models/students')

class StudentController{
  static getStudents(req, res){
    modelStudents.getStudents((err, data) => {
      if(err) res.send('404 not Found')
      res.render('students', {students : data});
    })
  }

  static addGet(req, res){
    const error = req.query.error
    res.render('students/add', {error : error})
  }

  static addPost(req, res){
    modelStudents.addPost(req.body, (err, data) => {
      if(err) {
        if(typeof err === 'object') res.redirect(`/students/add?error=${err.join(', ')}`)
        res.send(`404 not Found ${err}`)
      }
      else res.redirect('/students')
    })
  }

  static editGet(req, res){
    modelStudents.editGet(req.params.id, (err, data)=>{
      if(err) res.send('404 not Found')
      else {
        const error = req.query.error
        res.render('students/edit', {error : error , student : data})
      }
    })
  }

  static editPost(req, res){
    const id = Number(req.params.id)
    modelStudents.editPost(id, req.body, (err, data) => {
      if(err) {
        if(typeof err === 'object') res.redirect(`/students/${id}/edit?error=${err.join(', ')}`)
        res.send(`404 not Found ${err}`)
      }
      else res.redirect('/students')
    })
  }

  static deleteGet(req, res){
    modelStudents.delete(Number(req.params.id), (err, data) =>{
      if(err) res.send('404 not Found')
      else res.redirect('/students')
    })
  }

  static getByEmail(req, res){
    modelStudents.getByEmail(req.params.email, (err,data) => {
      if(err) res.send(`404 not Found ${err}`)
      else res.render('students', {students: [data]})
    })
  }
}

module.exports = StudentController