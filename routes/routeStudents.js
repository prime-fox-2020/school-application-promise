const express = require("express")
const router = express.Router()
const StudentsController = require("../controller/studentsController")


router.get('/',StudentsController.showStudentsData)
router.get('/add',StudentsController.addStudentsData)
router.post('/',StudentsController.postAddStudentsData)
router.get('/:id/edit',StudentsController.editStudentById)
router.post('/:id',StudentsController.postAfterEdit)
router.get('/:id/delete',StudentsController.deleteStudentsData)
router.get('/:email',StudentsController.findStudentByEmail)


module.exports = router;