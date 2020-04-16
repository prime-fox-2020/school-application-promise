const router = require('express').Router()
const StudentController = require('../controllers/studentController')

router.get('/', StudentController.studentListGet)
router.get('/add', StudentController.addStudentGet)
router.post('/add', StudentController.addStudentPost)
router.get('/:email', StudentController.emailStudentGet)
router.get('/:id/edit', StudentController.editStudentGet)
router.post('/:id/edit', StudentController.editStudentPost)
router.get('/:id/delete', StudentController.deleteStudentGet)

module.exports = router