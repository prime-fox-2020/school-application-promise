const studentControl = require('../controllers/StudentController')
const express = require('express')
const router = express.Router()

router.get('/', studentControl.getStudent)

router.get('/add', studentControl.addStudent)

router.get('/:email', studentControl.getStudentEmail)

router.get('/:id/edit', studentControl.editStudent)

router.get('/:id/delete', studentControl.deleteStudent)

router.post('/add', studentControl.addStudentPost)

router.post('/:id/edit', studentControl.editStudentPost)

module.exports = router