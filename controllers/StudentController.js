const StudentModel = require('../models/StudentModel')

class StudentController {

  static getStudents(req, res) {
    StudentModel.findAll()
      .then(data => {
        res.render('student', {data, alert: req.query})
      })
      .catch(err => {
        res.render('public/404', { errMsg: err })
      })
  }

  static getStudentByEmail(req, res) {
    StudentModel.findByEmail(req.url.split('/')[1])
      .then(data => {
        typeof data === 'object' ?
          res.render('student/detail', { data })
          : res.render('public/404', { errMsg: data })
      })
      .catch(err => {
        res.render('public/404', { errMsg: err })
      })
  }

  static getAdd(req, res) {
    res.render('student/add', { alert: req.query })
  }

  static postAdd(req, res) {
    StudentModel.createOne(req.body)
      .then((data) => {
        // res.send(data)
        if (data === 'Data berhasil ditambahkan')
          res.redirect(`/students?message=${data}&type=green`)
        else
          res.redirect(`/students/add?message=${data}&type=deep-orange`)
      })
      .catch(err => {
        res.render('public/404', { errMsg: err })
      })
  }

  static getEdit(req, res) {
    StudentModel.getEdit(Number(req.params.id))
      .then(data => {
        typeof data === 'object' ? 
          res.render('student/edit', { data })
          : res.render('public/404', { errMsg: data })
      })
      .catch(err => {
        res.render('public/404', { errMsg: err })
      })
  }

  static postEdit(req, res) {
    // res.send(typeof req.params.id)
    StudentModel.postEdit(Number(req.params.id), req.body)
    .then(data => {
      console.log(data)
      typeof data === 'object' ?
        res.render('student/edit', { data })
        : res.redirect(`/students?message=${data}&type=green`)
    })
    .catch(err => {
      res.render('public/404', { errMsg: err })
    })
  }

  static deleteById(req, res) {
    StudentModel.deleteById(Number(req.params.id))
    .then(data => {
      res.redirect(`/students?message=${data}&type=green`)
    })
    .catch(err => {
      res.render('public/404', { errMsg: err })
    })
  }
}

module.exports = StudentController