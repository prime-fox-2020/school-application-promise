const SubjectsModel = require('../model/subjectsModel')

class SubjectsController {

  static getSubjects(req, res) {
    SubjectsModel.getSubjects()
    .then(data => {
      res.render('subjects', {subjects: data})
    })
    .catch(err => {
      res.render('error', {error: err})
    })
  }

  static getId(req, res) {
    SubjectsModel.getId(req.params.id)
    .then(data => {
      res.render('subjects', {subjects:data})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
    }
  
}

module.exports = SubjectsController