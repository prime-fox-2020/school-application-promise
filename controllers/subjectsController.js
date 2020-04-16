const subjectsModel = require('../models/subjectsModel')

class subjectsController {

  static getSubjects(req,res){
    subjectsModel.getSubjects()
    .then(data=>{
      res.render('subjects', { data })
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static getId(req, res){
    subjectsModel.getId(Number(req.params.id))
    .then(data=>{
      res.render('subjects', { data: data, alert: '' })
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }
}

module.exports = subjectsController