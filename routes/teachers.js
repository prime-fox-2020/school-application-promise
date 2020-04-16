const express = require('express')
const TeachersController = require('../controllers/TeachersController')
const router = express.Router()

router.get('/', TeachersController.getPage)
router.get('/:id', TeachersController.pageWithId)

module.exports = router