const express = require('express')
const router = express.Router()

const routeStudents = require('./students')
const routeSubjects = require('./subjects')
const routeTeachers = require('./teachers')

const HomeController = require('../controllers/HomeController.js')

// res.send('Oke masuk sampe ke routes/index')
//then connect this page to controllers
router.get('/', HomeController.getHome)
router.use('/students', routeStudents)
router.use('/subjects', routeSubjects)
router.use('/teachers', routeTeachers)
router.get('/*', HomeController.notFound) // must be paling bawah

module.exports = router;
