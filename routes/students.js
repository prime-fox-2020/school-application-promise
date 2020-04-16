// express > app.get 

const express = require('express')
const ControllerStudent = require('../controller/studentsController.js')

const routes = express.Router()

routes.get('/students', ControllerStudent.getAll)
routes.get('/students/add',ControllerStudent.addStudent)
routes.post('/students/add',ControllerStudent.postAdd)
routes.get('/students/edit/:id',ControllerStudent.edit)
routes.post('/students/edit/:id',ControllerStudent.postEdit)
routes.get('/students/delete/:id',ControllerStudent.postDelete)
routes.get('/students/:email',ControllerStudent.getEmail)
module.exports = routes
