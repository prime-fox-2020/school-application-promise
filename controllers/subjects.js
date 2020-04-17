'use strict'
const modelSubjects = require('../models/subjects')

class SubjectsController{
  static getSubjects(req, res){
    modelSubjects.getSubjects((err, data) => {
      if(err) res.send('404 error')
      else res.render('subjects', {subjects : data})
    })
  }

  static getSubjectId(req, res){
    modelSubjects.getSubjectId(req.params.id, (err, data) => {
      if(err) res.send('404 error')
      else res.render('subjects', {subjects : [data]})
    })
  }
}

module.exports = SubjectsController;