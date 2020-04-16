const express = require("express")
const router = express.Router()
const HomeController = require("../controller/homeController")
const routeTeachers = require("./routeTeachers")
const routeStudents = require("./routeStudents")
const routeSubjects = require("./routeSubjects")

router.get('/', HomeController.getHome)
router.use('/teachers', routeTeachers)
router.use('/students', routeStudents)
router.use('/subjects', routeSubjects)
router.get('/*', HomeController.notFound)


module.exports = router