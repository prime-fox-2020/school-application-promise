const router = require('express').Router()
const StudentsController = require('../controller/students-controller.js')

router.get('/', StudentsController.showStudents)
router.get('/add', StudentsController.getAddForm)
router.post('/add', StudentsController.postAdd)
router.get('/:id/edit', StudentsController.getEditForm)
router.post('/:id/edit', StudentsController.postEdit)
router.get('/:id/delete', StudentsController.deleteStudent)
router.post('/:email', StudentsController.searchStudentByEmail)



module.exports = router