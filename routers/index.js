const router = require('express').Router()

const homeController = require('../controllers/homeController')
const studentsRoutes = require('./studentsRoutes')
const subjectsRoutes = require('./subjectsRoutes')
const teachersRoutes = require('./teachersRoutes')

router.get('/', homeController.getHome)
router.use('/students', studentsRoutes)
router.use('/subjects', subjectsRoutes)
router.use('/teachers', teachersRoutes)

router.get('/*', homeController.notFound)

module.exports = router