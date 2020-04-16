const routes = require('express').Router()
const homeController = require('../controller/homeController')
const teachersRoute = require('./teachers')
const studentsRoute = require('./students')
const subjectRoute = require('./subject')


routes.get('/', homeController.getHome)
routes.use('/teachers', teachersRoute)
routes.use('/students', studentsRoute)
routes.use('/subject', subjectRoute)

routes.get('/*', homeController.notFound)

module.exports = routes;