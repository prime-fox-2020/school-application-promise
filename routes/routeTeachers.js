const express = require("express")
const router = express.Router()
const TeachersController = require("../controller/teachersController")


router.get('/',TeachersController.showTeachersData)
router.get('/:id',TeachersController.findTeacherById)

module.exports = router;