const express = require(`express`)
const router = express.Router()
const teachersControllers = require(`../controllers/TeacherController`)




router.get(`/`,teachersControllers.getTeachersList)

router.get(`/*`, teachersControllers.notFound)


module.exports = router