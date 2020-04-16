const express = require('express')
const HomeController = require('../controllers/HomeController')
const routeStudents = require('./students')
const routeTeachers = require('./teachers')
const routeSubjects = require('./subjects')
const router = express.Router()

router.get('/', HomeController.getHome)
router.use('/students', routeStudents)
router.use('/teachers', routeTeachers)
router.use('/subjects', routeSubjects)
router.get('/*', HomeController.notFound)

module.exports = router