const routes = require('express').Router()
const SubjectsController = require('../controller/subjectsController')

routes.get('/', SubjectsController.getSubjects)
routes.get('/:id', SubjectsController.getId)

module.exports = routes