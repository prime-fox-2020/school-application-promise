const StudentsModel = require('../model/studentsModel')


class StudentsController {

  static getStudents(req, res) {
    StudentsModel.getStudents() 
    .then(data => {
      res.render('students', {students: data,alert:req.query})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
    
  }
  
  static addStudents(req, res) {
    res.render('add')
  }

  static postAdd(req, res) {
    const error = StudentsModel.validation(req.body)

    if(error.length >= 4) {
      res.redirect(`/students?message=Please fill the form first&type=danger`)
    } else if(error.length > 0 ) {
      res.redirect(`/students?message=${error}&type=danger`)
    } else {
      StudentsModel.postAdd(req.body)
      .then(data => {
        res.redirect(`/students?message=${data}`)
      })
      .catch(err => {
        res.render('error', {error: err})
      })
    }
  }

  static getEdit(req, res) {
    StudentsModel.getEdit(req.params.id)
    .then((data) => {
      res.render('edit', {data})
    })
    .catch((err) => {
      res.render('error', {error: err})
    })
  }

  static postEdit(req, res) {
    const edited = {
      id: Number(req.params.id),
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date
    }

    const error = StudentsModel.validation(edited)
    if(error.length >= 4) {
      res.redirect(`/students?message=Please fill the form first&type=danger`)
    } else if(error.length > 0 ) {
      res.redirect(`/students?message=${error}&type=danger`)
    } else {
      StudentsModel.postEdit(edited)
      .then(data => {
        res.redirect(`/students?message=${data}`)
      })
      .catch(err => {
        res.render('error', {error: err})
      })
    }
  }

  static getEmail(req, res) {
    StudentsModel.getEmail(req.params.email)
    .then(data => {
      res.render('students', {students:data,alert:''})
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }

  static delete(req, res) {
    StudentsModel.delete(Number(req.params.id))
    .then(data => {
      res.redirect(`/students?message=${data}&type=success`)
    })
    .catch(err => {
      res.render('error', {error:err})
    })
  }

}
module.exports = StudentsController