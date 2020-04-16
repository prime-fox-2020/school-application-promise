const router = require('express').Router()

const StudentsController = require('../controllers/studentsController')


router.get('/', StudentsController.getStudents)
router.get('/add', StudentsController.addStudentsGet)
router.post('/add', StudentsController.addStudentsPost)
router.get('/:id/edit', StudentsController.editStudentsGet)
router.post('/:id/edit', StudentsController.editStudentsPost)
router.get('/:id/delete', StudentsController.deleteStudents)
router.get('/:email', StudentsController.emailStudents)

module.exports = router