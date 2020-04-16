const Subjects = require('../models/subjects');

class SubjectsController {
  static getData(req, res) {
    Subjects.getData()
      .then(data => {
        res.render('subjects', {data});
      })
      .catch(err => {
        res.render('error', {msg: err});
      })
  }

  static getDataById(req, res) {
    Subjects.getData()
      .then(data => {
        data.forEach(el => {
          if (el.id == req.params.id) {
            res.render('subjects', {data: [el]});
          }
        })
      })
      .catch(err => {
        res.render('error', {msg: err});
      })
  }
}

module.exports = SubjectsController;