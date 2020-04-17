const router = require('express').Router()
const TeachersController = require('../controllers/teachers')


router.get('/', TeachersController.getAll)

router.get('/:id', TeachersController.getByID)


module.exports = router