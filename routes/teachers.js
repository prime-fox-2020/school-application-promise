const {Router} = require('express')
const router = Router()
const ControllerTeachers = require('../controllers/teachers')

router.get('/', ControllerTeachers.get)

router.get('/:id', ControllerTeachers.getId)


module.exports = router