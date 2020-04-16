const router = require('express').Router()
const TeacherController = require('../controllers/teacherController')

router.get('/', TeacherController.teacherListGet)
router.get('/:id', TeacherController.teacherListIdGet)


module.exports = router