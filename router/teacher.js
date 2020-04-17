
const express = require('express')
const TeacherController = require('../controllers/TeacherController')
const router = express.Router()

router
  .route('/')
  .get(TeacherController.getTeachers)

router
  .route('/:id')
  .get(TeacherController.getTeacherById)

module.exports = router