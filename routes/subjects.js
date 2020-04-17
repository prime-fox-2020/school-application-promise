const router = require('express').Router()
const SubjectsController = require('../controllers/subjects')


router.get('/', SubjectsController.getAll)

router.get('/:id', SubjectsController.getByID)


module.exports = router