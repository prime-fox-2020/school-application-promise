const router = require('express').Router()

const subjectsController = require('../controllers/subjectsController')

router.get('/', subjectsController.getSubjects)
router.get('/:id', subjectsController.idSubjects)

module.exports = router