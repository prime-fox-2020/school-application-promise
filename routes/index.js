const express = require('express')
const router  = express.Router()
const home = require('../controllers/home')

//routes
const teachers  = require('./teachers')
const subjects  = require('./subjects')
const students  = require('./students')

router.get('/', home.getHome)
router.use('/teachers', teachers)
router.use('/students', students)
router.use('/subjects', subjects)
router.get('/*', home.notFound)


module.exports = router;