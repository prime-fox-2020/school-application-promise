const express   = require('express')
const teachers  = require('../controllers/teachers')
const router    = express.Router()

router.get('/', teachers.getTeachers)
router.get('/:id', teachers.getTeacherId)

module.exports = router