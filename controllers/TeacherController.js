const TeacherModel = require('../models/TeacherModel')

class TeacherController {

  static getTeachers(req, res) {
    TeacherModel.findAll((err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else {
        res.render('teacher', { data })
      }
    })
  }

  static getTeacherById(req, res) {
    TeacherModel.findById(Number(req.params.id), (err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else if (data.length) {
        res.render('teacher/detail', {data})
      } else {
        res.render('public/404', { errMsg: `Teacher with ID ${req.params.id} is not found!` })
      }
    })
  }
}

module.exports = TeacherController