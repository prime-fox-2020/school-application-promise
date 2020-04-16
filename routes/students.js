const express = require('express')
const router = express.Router()

const StudentsController = require('../controllers/StudentsController')

router.get('/', StudentsController.getPage)//studentsList
router.get('/add', StudentsController.addPage)
router.post('/add', StudentsController.postAddPage)
router.get('/:id/delete', StudentsController.delete)
router.get('/:id/edit', StudentsController.editPage)
router.post('/:id/edit', StudentsController.postEditPage)
router.get('/:email', StudentsController.pageWithEmail)


module.exports = router;