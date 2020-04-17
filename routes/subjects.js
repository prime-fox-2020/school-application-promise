const express = require(`express`)
const router = express.Router()
const subjectsControllers = require(`../controllers/SubjectsController`)




router.get(`/`,subjectsControllers.getSubjecsList)


router.get(`/*`, subjectsControllers.notFound)


module.exports = router