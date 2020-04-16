const Teachers = require('../models/teachers');

class TeachersController {
  static getData(req, res) {
    Teachers.getData()
      .then(data => {
        res.render('teachers', {data});
      })
      .catch(err => {
        res.render('err', {msg: err});
      })
  }

  static getDataById(req, res) {
    Teachers.getData()
      .then(data => {
        data.forEach(el => {
          if (el.id == req.params.id) {
            res.render('teachers', {data: [el]});
          }
        })
      })
      .catch(err => {
        res.render('error', {msg: err});
      })
  }
}

module.exports = TeachersController;