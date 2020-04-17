
const express = require('express')
const SubjectController = require('../controllers/SubjectController')
const router = express.Router()

router
  .route('/')
  .get(SubjectController.getSubjects)

router
  .route('/:id')
  .get(SubjectController.getSubjectById)

module.exports = router