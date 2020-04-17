const router = require('express').Router();

const StudentsController = require('../controller/studentsController');

router.get('/', StudentsController.showStudents);
router.get('/add', StudentsController.addStudent);
router.post('/add', StudentsController.postStudent);

router.get('/:id/edit', StudentsController.getEditStudent);
router.post('/:id/edit', StudentsController.postEditStudent);
router.get('/:email/getEmail', StudentsController.emailStudentGet);
router.get('/:id/delete', StudentsController.deleteStudent)

module.exports = router;
