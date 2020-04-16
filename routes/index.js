const routes = require('express').Router()
const HomeController = require('../controller/homeController')
const routeStudents = require('./students')
const routeTeachers = require('./teachers')
const routeSubjects = require('./subjects')

routes.get('/', HomeController.getHome)
routes.use('/students', routeStudents)
routes.use('/teachers', routeTeachers)
routes.use('/subjects', routeSubjects)
routes.get('/*', HomeController.getError)

module.exports = routes