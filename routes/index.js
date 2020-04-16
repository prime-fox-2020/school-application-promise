const express = require('express')
const HomeController = require('../controllers/HomeController')
const routeStudents = require('./students')
const routeSubjects = require('./subjects')
const routeTeachers = require('./teachers')

const router = express.Router()

router.get('/', HomeController.getHome)
router.use('/students', routeStudents)
router.use('/subjects', routeSubjects)
router.use('/teachers', routeTeachers)
router.get('/*', HomeController.notFound)

module.exports = router