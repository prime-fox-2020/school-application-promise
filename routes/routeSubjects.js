const express = require("express")
const router = express.Router()
const SubjectsController = require("../controller/subjectsController")


router.get('/',SubjectsController.showSubjectsData)
router.get('/:id',SubjectsController.findSubjectById)

module.exports = router;