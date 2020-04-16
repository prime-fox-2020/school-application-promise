const router = require('express').Router();

const TeacherContoller = require('../controllers/teacher');

router.get('/',TeacherContoller.show)

module.exports = router;