const express = require('express')
const studentRouter = require('./student')
const teacherRouter = require('./teacher')
const subjectRouter = require('./subject')
const pageRouter = require('./page')

const router = express.Router()

router.use('/students', studentRouter)
router.use('/teachers', teacherRouter)
router.use('/subjects', subjectRouter)
router.use('/', pageRouter)

module.exports = router