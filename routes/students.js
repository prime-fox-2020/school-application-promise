const router=require('express').Router()
const studentController=require('../controller/studentController')
// const db=require('../db/config')
// db.connect()

// router.get('/',(req,res)=>{
//     res.send('student')
// })
router.get('/add',studentController.addGet)
router.post('/add',studentController.addPost)
router.get('/:id/edit',studentController.editGet)
router.post('/:id/edit',studentController.editPost)
router.get('/:id/delete',studentController.deletePost)
router.get('/',studentController.getData)
router.post('/',studentController.postData)
router.get('/:email',studentController.filterGet)



module.exports=router