const router=require('express').Router()
const HomeController=require('../controller/homeController')


const routeStudents=require('./students')
const routeTeachers=require('./teachers')
const routeSubjects=require('./subjects')

router.use('/students',routeStudents)
router.use('/teachers',routeTeachers)
router.use('/subjects',routeSubjects)
router.get('/',HomeController.getHome)
router.get('/*', HomeController.notFound)



module.exports=router