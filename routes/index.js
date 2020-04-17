const {Router} = require('express')
const router = Router()
const HomeController = require('../controllers/home.js')

router.get('/', HomeController.getHome)

const students = require('./students')
router.use('/students', students)

const subjects = require('./subjects')
router.use('/subjects', subjects)

const teachers = require('./teachers')
router.use('/teachers', teachers)



module.exports = router