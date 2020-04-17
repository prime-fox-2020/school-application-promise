const express = require(`express`)
const router = express.Router()
const studentsControllers = require(`../controllers/StudentController.js`)




router.get(`/`,studentsControllers.getStudentsList)
router.get(`/add`,studentsControllers.addGet)
router.post(`/add`,studentsControllers.addPost)
router.get(`/:id/edit`,studentsControllers.editGet)
router.post(`/:id/edit`,studentsControllers.editPost)
router.get(`/:id/delete`,studentsControllers.delete)


router.get(`/*`, studentsControllers.notFound)


module.exports = router