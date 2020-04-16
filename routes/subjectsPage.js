const subjectControl = require('../controllers/SubjectController')
const express = require('express')
const router = express.Router()

router.get('/', subjectControl.getSubject)
router.get('/:id', subjectControl.getSubjectId)

module.exports = router