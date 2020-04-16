const express = require('express')
const SubjectsController = require('../controllers/SubjectsController')
const router = express.Router()

router.get('/', SubjectsController.getPage)
router.get('/:id', SubjectsController.pageWithId)
module.exports = router