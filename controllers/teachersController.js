const teachersModel = require('../models/teachersModel')

class TeachersController {

  static getTeachers(req,res){
    teachersModel.getTeachers()
    .then(data=>{
      res.render('teachers', { data })
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static getId(req, res){
    teachersModel.getId(Number(req.params.id))
    .then(data=>{
      res.render('teachers', { data: data, alert: '' })
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }
}

module.exports = TeachersController