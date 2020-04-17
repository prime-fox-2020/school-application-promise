const router = require('express').Router()

const HomeController = require('../controllers/home')
const students = require('./students')
const teachers = require('./teachers')
const subjects = require('./subjects')

// call controller
router.get('/', HomeController.showHome)

// call route
router.use('/students', students)
router.use('/teachers', teachers)
router.use('/subjects', subjects)

// default (route undefined)
router.get('/*', HomeController.show404)

module.exports = router