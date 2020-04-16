const router = require('express').Router()
const teachersPage = require('../controller/teacherPage')

router.get('/', teachersPage.getTeacherList)
router.get('/:id', teachersPage.getTeachersId)

module.exports = router;