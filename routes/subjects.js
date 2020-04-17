const express   = require('express')
const subjects  = require('../controllers/subjects')
const router    = express.Router()

router.get('/', subjects.getSubjects)
router.get('/:id', subjects.getSubjectId)

module.exports = router