const router = require('express').Router()
const subjectPage = require('../controller/subjectPage')

router.get('/', subjectPage.getSubjectList)

module.exports = router;