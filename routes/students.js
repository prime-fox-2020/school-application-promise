const routes = require('express').Router()
const StudentsController = require('../controller/studentsController')

routes.get('/', StudentsController.getStudents)
routes.get('/add', StudentsController.addStudents)
routes.post('/add', StudentsController.postAdd)
routes.get('/:id/delete', StudentsController.delete)
routes.get('/:id/edit', StudentsController.getEdit)
routes.post('/:id/edit', StudentsController.postEdit)
routes.get('/:email', StudentsController.getEmail)

module.exports = routes