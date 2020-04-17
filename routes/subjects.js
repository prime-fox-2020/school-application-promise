const router=require('express').Router()
const subjectRoute=require('../controller/subjectController')

router.get('/',subjectRoute.getData)
router.post('/',subjectRoute.postData)
router.get('/:id',subjectRoute.filterGet)

module.exports=router