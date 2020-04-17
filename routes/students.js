const router = require('express').Router()
const StudentsController = require('../controllers/students')


router.get('/', StudentsController.getAll)

router.get('/add', StudentsController.showForm)
router.post('/add', StudentsController.addProcess)

router.get('/:id/delete', StudentsController.deleteProcess)

router.get('/:id/edit/', StudentsController.showEditForm)
router.post('/:id/edit/', StudentsController.editProcess)

router.get('/:email', StudentsController.getByEmail)


module.exports = router