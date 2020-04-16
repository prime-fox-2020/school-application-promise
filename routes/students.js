const express = require('express')
const studentsController = require('../controllers/studentsController')

const router = express.Router()

router.get('/', studentsController.getStudents)
router.get('/add', studentsController.addGet)
router.post('/add', studentsController.addPost)
router.get('/:id/delete', studentsController.delete)
router.get('/:id/edit', studentsController.editGet)
router.post('/:id/edit', studentsController.editPost)
router.get('/:email', studentsController.getEmail)


module.exports = router