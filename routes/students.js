const router = require('express').Router()
const studentsPage = require('../controller/studentsPage')

router.get('/', studentsPage.getStudentsList)
router.get('/add_student', studentsPage.addStudent)
router.post('/add_student', studentsPage.postStudent)
router.get('/:id/edit', studentsPage.getEditStudent)
router.post('/:id/edit', studentsPage.postEditStudent)
router.get('/:id/delete', studentsPage.deleteStudent)
router.get('/:email', studentsPage.getEmail)

module.exports = router;