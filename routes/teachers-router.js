const router = require('express').Router()
const TeachersController = require('../controller/teachers-controller.js')

router.get('/', TeachersController.showTeachers)
router.get('/add', TeachersController.getAddForm)
router.post('/add', TeachersController.postAdd)
router.get('/:id/edit', TeachersController.getEditForm)
router.post('/:id/edit', TeachersController.postEdit)
router.get('/:id/delete', TeachersController.deleteTeachers)
router.post('/:email', TeachersController.searchTeacherByEmail)

module.exports = router