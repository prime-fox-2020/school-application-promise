const express = require('express')
const router = express.Router()
const DefaultController = require('../controllers/DefaultController')
const TeacherController = require('../controllers/TeacherController')
const SubjectController = require('../controllers/SubjectController')
const StudentController = require('../controllers/StudentController')

router.get('/', DefaultController.home)
router.get('/teacher', TeacherController.get)
router.get('/subject', SubjectController.get)
router.get('/student', StudentController.get)
router.get('/student/add', StudentController.addForm)
router.post('/student/add', StudentController.add)
router.get('/student/:id?/edit', StudentController.editForm)
router.post('/student/:id?/edit', StudentController.edit)
router.get('/student/:id?/delete', StudentController.delete)


module.exports = router