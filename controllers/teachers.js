'use strict'
const modelTeacher = require('../models/teachers')

class TeacherController{
  static getTeachers(req, res){
    modelTeacher.getTeachers((err, data) => {
      if(err) res.send('404 error')
      else res.render('teachers', {teachers : data})
    })
  }

  static getTeacherId(req, res){
    modelTeacher.getTeacherId(req.params.id, (err, data) => {
      if(err) res.send('404 error')
      else res.render('teachers', {teachers : [data]})
    })
  }
}

module.exports = TeacherController;