const TeachersModel = require('../model/teachersModel')

class TeachersController {

  static getTeachers(req, res) {
    
    TeachersModel.getTeachers()
    .then(data => {
      res.render('teachers', {teachers: data})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }

  static getId(req, res) {
    TeachersModel.getId(req.params.id)
    .then(data => {
      res.render('teachers', {teachers:data})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }


}

module.exports = TeachersController