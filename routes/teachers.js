const express = require('express')
const teachersController = require('../controllers/teachersController')

const router = express.Router()

router.get('/', teachersController.getTeachers)
router.get('/:id', teachersController.getId)

module.exports = router