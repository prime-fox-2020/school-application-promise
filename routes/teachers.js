const routes = require('express').Router()
const TeachersController = require('../controller/teachersController')

routes.get('/', TeachersController.getTeachers)
routes.get('/:id', TeachersController.getId)

module.exports = routes