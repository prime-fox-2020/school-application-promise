const router = require('express').Router()
const HomeController = require('../controllers/homeController')
const teacherRouter = require('./teacher')
const studentRouter = require('./student')
const subjectRouter = require('./subject')

router.get('/', HomeController.getHome)
router.use('/teacher', teacherRouter)
router.use('/student', studentRouter)
router.use('/subject', subjectRouter)
router.get('/*', HomeController.notFound)

module.exports = router