const router = require('express').Router()
const SubjectController = require('../controllers/subjectController')

router.get('/', SubjectController.subjectListGet)
router.get('/:id', SubjectController.subjectListIdGet)

module.exports = router