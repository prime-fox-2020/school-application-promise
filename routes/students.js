const express = require('express')
const StudentsController = require('../controllers/StudentsController')

const router = express.Router()

//ini routing untuk localhost:3000/students/
router.get('/', StudentsController.studentsList)
router.get('/add', StudentsController.addGet)
router.post('/add', StudentsController.addPost)
router.get('/:id/edit', StudentsController.editGet)
router.post('/:id/edit', StudentsController.editPost)
router.get('/:id/delete', StudentsController.delete)
router.get('/:email', StudentsController.getEmail)



module.exports = router