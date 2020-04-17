const SubjectModel = require('../models/SubjectModel')

class SubjectController {

  static getSubjects(req, res) {
    SubjectModel.findAll((err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else {
        res.render('subject', { data })
      }
    })
  }

  static getSubjectById(req, res) {
    SubjectModel.findById(Number(req.params.id), (err, data) => {
      if (err) {
        res.render('public/404', { errMsg: err })
      } else if (data.length) {
        res.render('subject/detail', { data })
      } else {
        res.render('public/404', { errMsg: `Subject with ID ${req.params.id} is not found!` })
      }
    })
  }
}

module.exports = SubjectController