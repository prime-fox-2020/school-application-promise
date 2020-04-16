const router = require('express').Router();

const StudentContoller = require('../controllers/student');

router.get('/',StudentContoller.show)

router.get('/add',StudentContoller.addGet)
router.post('/add',StudentContoller.addPost)

router.get('/:id/delete',StudentContoller.delete)

router.get('/:id/edit',StudentContoller.editGet)
router.post('/:id/edit',StudentContoller.editPost)

router.post('/:email',StudentContoller.emailPost)



module.exports = router;