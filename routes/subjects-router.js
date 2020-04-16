const router = require('express').Router()
const SubjectsController = require('../controller/subjects-controller.js')

router.get('/', SubjectsController.showSubjects)
router.get('/add', SubjectsController.getAddForm)
router.post('/add', SubjectsController.postAdd)
router.get('/:id/edit', SubjectsController.getEditForm)
router.post('/:id/edit', SubjectsController.postEdit)
router.get('/:id/delete', SubjectsController.deleteSubject)

module.exports = router