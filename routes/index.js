const router = require('express').Router()
const IndexController = require('../controller/index-controller.js')
const studentsRouter = require('./students-router')
const teachersRouter = require('./teachers-router')
const subjectsRouter = require('./subjects-router')


router.get('/', IndexController.showHome)
router.use('/students', studentsRouter)
router.use('/teachers', teachersRouter)
router.use('/subjects', subjectsRouter)


module.exports = router