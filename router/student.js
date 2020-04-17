
const express = require('express')
const StudentController = require('../controllers/StudentController')
const router = express.Router()

router
  .route('/')
  .get(StudentController.getStudents)

router
  .route('/*@*')
  .get(StudentController.getStudentByEmail)

router
  .route('/add')
  .get(StudentController.getAdd)
  .post(StudentController.postAdd)

router
  .route('/:id/edit')
  .get(StudentController.getEdit)
  .post(StudentController.postEdit)

router
  .route('/:id/delete')
  .get(StudentController.deleteById)

module.exports = router