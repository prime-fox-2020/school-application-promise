//get data from model
const STM = require('../model/studentsModel');

class StudentsController {

  static studentList(req, res) {
    STM.getStudent()
    .then(data => {
         return res.render('students', {data})
      })
      .catch(err =>{
         throw err
      })
  }

  static studentEmail(req, res) {
    STM.getEmail(req.params.email)
    .then(data => {
         return res.render('students', {data})
      })
      .catch(err =>{
         throw err
      })

  }

  static add(req, res) {
    res.render('add');
  }

  static addPost(req, res) {
    STM.addStudent(req.body.firstName, req.body.lastName, req.body.email, req.body.gender, req.body.birthdate)
    .then(data => {
         return res.redirect('/students')
      })
      .catch(err =>{
         throw err
      })
  }

  static edit(req, res) {
    STM.getStudentID(Number(req.params.id))
    .then(data => {
         return res.render('edit', {data})
      })
      .catch(err =>{
         throw err
      })

  }

  static editPost(req, res) {
    STM.editStudent(req.params.id, req.body.firstName, req.body.lastName, req.body.email, req.body.gender, req.body.birthdate)
    .then(data => {
         return res.redirect('/students')
      })
      .catch(err =>{
         throw err
      })
  }

  static deleteStudentById(req, res) {
    STM.deleteStudent(req.params.id)
    .then(data => {
         return res.redirect('/students')
      })
      .catch(err =>{
         throw err
      })
  }

}

//send data to routes (students.js)
module.exports = StudentsController;
