const express = require('express')
const router = express.Router()
const homeControl = require('../controllers/HomeController')
const teachersPage = require('./teachersPage')
const studentsPage = require('./studentsPage')
const subjectsPage = require('./subjectsPage')

router.get('/', homeControl.getHome)

router.use('/teachers', teachersPage)
router.use('/students', studentsPage)
router.use('/subjects', subjectsPage)

module.exports = router