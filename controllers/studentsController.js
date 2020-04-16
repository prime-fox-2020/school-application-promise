const studentsModel = require('../models/studentsModel')

class StudentsController {

  static getStudents(req, res){
    studentsModel.getStudents()
    .then(data=>{
      res.render('students', { data, alert: req.query })
    })
    .catch(err=>{
      res.render('error', {error: err})      
    })
  }

  static addGet(req, res){
    const error = req.query.error
    res.render('add', {error})
  }

  static addPost(req, res){
    let error = studentsModel.validate(req.body)

    if(error.length > 0){
      res.redirect(`/students/add?error=${error.join(', ')}`)
    } else {
      studentsModel.addPost(req.body)
      .then(data=>{
        res.redirect(`/students?message=${data}&type=success`)
      })
      .catch(error=>{
        res.render('error', {error})
      })
    }
  }

  static delete (req, res){
    studentsModel.delete(Number(req.params.id))
    .then(data=>{
      res.redirect(`/students?message=${data}&type=success`)
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static editGet(req, res){
    const error = req.query.error
    studentsModel.editGet(Number(req.params.id))
    .then(data=>{
      res.render('edit', {data, error})
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

  static editPost(req, res){
    const tempData = {
      id: Number(req.params.id),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,  
      birth_date: req.body.birth_date
    }
    let error = studentsModel.validate(tempData)
    
    if(error.length > 0){
      res.redirect(`/students/${tempData.id}/edit?error=${error.join(', ')}`)
    } else {
      studentsModel.editPost(tempData)
      .then(msg=>{
        res.redirect(`/students?message=${msg}&type=success`)
      })
      .catch(error=>{
        res.redirect(`/students/${tempData.id}/edit?error=${error.join(', ')}`)
      })
    }
  }

  static getEmail(req, res){
    studentsModel.getEmail(req.params.email)
    .then((data)=>{
      res.render('students', { data, alert: '' })
    })
    .catch(error=>{
      res.render('error', {error})
    })
  }

}

module.exports = StudentsController