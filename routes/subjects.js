const express = require('express')
const subjectsController = require('../controllers/subjectsController')

const router = express.Router()

router.get('/', subjectsController.getSubjects)
router.get('/:id', subjectsController.getId)

module.exports = router