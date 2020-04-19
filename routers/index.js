const router = require('express').Router()
const HomeController = require('../controllers/homeController')
const studentRouter = require('./student')


router.get('/', HomeController.getHome)
router.use('/student', studentRouter)
router.get('/*', HomeController.notFound)

module.exports = router