const express = require(`express`)
const router = express.Router()
const homeControllers = require(`../controllers/HomeController.js`)
const routerStudents = require(`./students`)
const routerTeachers = require(`./teachers`)
const routerSubjects = require(`./subjects`)

router.get(`/`,(req,res)=>{
    homeControllers.getHome(req,res)
})

router.use(`/students`,routerStudents)
router.use(`/teachers`,routerTeachers)
router.use(`/subjects`,routerSubjects)


router.get(`/*`, homeControllers.notFound)


module.exports = router