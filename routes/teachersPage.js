const teachControl = require('../controllers/TeacherController')
const express = require('express')
const router = express.Router()

router.get('/',teachControl.getTeacher)
router.get('/:id', teachControl.getTeacherId)

module.exports = router