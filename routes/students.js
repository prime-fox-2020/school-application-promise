const express = require('express')
const StudentsController = require('../controllers/StudentsController')
const router = express.Router()

router.get('/', StudentsController.getPage)
router.get('/add', StudentsController.addPage)
router.post('/add', StudentsController.postAddPage)
router.get('/:email', StudentsController.pageWithEmail)
router.get('/:id/edit', StudentsController.editPage)
router.post('/:id/edit', StudentsController.postEditPage)
router.get('/:id/delete', StudentsController.delete)
module.exports = router