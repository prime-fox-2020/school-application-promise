const router = require('express').Router()
const subjectPage = require('../controller/subjectPage')

router.get('/', subjectPage.getSubjectList)
router.get('/:id', subjectPage.getSubjectId)

module.exports = router;