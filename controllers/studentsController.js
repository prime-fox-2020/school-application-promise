const Students = require('../models/students');

class StudentsController {
  static getData(req, res) {
    Students.getData()
      .then(result => res.render('students', {data: result, req}))
      .catch(err => res.render('error', {msg: err}))
  }

  static getDataByEmail(req, res) {
    Students.getData()
      .then(data => {
        let flag = true;
        data.forEach(el => {
          if (el.email == req.params.email) {
            res.render('students', {data: [el], req});
            flag = false;
          }
        })
        if (flag) {
          res.render('students', {data: req.params.email, req})
        }
      })
      .catch(err => {
        res.render('error', {msg: err});
      })
  }

  static search(req, res) {
    res.redirect(`/students/${req.body.search}`);
  }

  static addDataGet(req, res) {
    res.render('students_form', {data: null, title: 'Add', validate: null});
  }

  static addData(req, res) {
    Students.addData(req.body.first_name, req.body.last_name, req.body.email, req.body.birth_date) 
      .then(validate => {
        if (validate) {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            birth_date: req.body.birth_date
          }
          res.render('students_form', {data, title: 'Add', validate});
        } else {
          res.redirect('/students?msg=Data Student berhasil ditambahkan');
        }
      })
      .catch(err => res.render('error', {msg: err}))
  }

  static editDataGet(req, res) {
    Students.getData()
      .then(data => {
        data.forEach(el => {
          if (el.id == req.params.id) {
            res.render('students_form', {data: el, title: 'Edit', validate: null})
          }
        })
      })
      .catch(err => res.render('error', {msg: err}))
  }

  static editData(req, res) {
    Students.editData(req.body.first_name, req.body.last_name, req.body.email, req.body.birth_date, req.params.id)
      .then(validate => {
        if (validate) {
          const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            birth_date: req.body.birth_date
          }
          res.render('students_form', {data, title: 'Edit', validate});
        } else {
          res.redirect('/students?msg=Data Student berhasil diubah');
        }
      })
      .catch(err => res.render('error', {msg: err}))
  }

  static deleteData(req, res) {
    Students.deleteData(req.params.id)
      .then(() => res.redirect('/students?msg=Data Student berhasil dihapus'))
      .catch(err => res.render('error', {msg: err}))
  }
}

module.exports = StudentsController;