const router=require('express').Router()
const teacherRoute=require('../controller/teacherController')

router.get('/',teacherRoute.getData)
router.post('/',teacherRoute.postData)
router.get('/:id',teacherRoute.filterGet)

module.exports=router