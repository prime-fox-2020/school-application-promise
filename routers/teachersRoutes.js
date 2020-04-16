const router = require('express').Router()

const TeachersController = require('../controllers/teachersController')

router.get('/', TeachersController.getteachers)
router.get('/:id', TeachersController.idTeachers)

module.exports = router