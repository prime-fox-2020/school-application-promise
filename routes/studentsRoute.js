const { Router } = require('express');
const StudentController = require('../controllers/students');
const studentsRouter = Router();

studentsRouter.get('/', StudentController.list);
studentsRouter.get('/add', StudentController.showAddForm);
studentsRouter.post('/add', StudentController.add);
studentsRouter.get('/:email', StudentController.getByEmail);
studentsRouter.get('/:id/edit', StudentController.showEditForm);
studentsRouter.post('/:id/edit', StudentController.edit);
studentsRouter.get('/:id/delete', StudentController.delete);

module.exports = studentsRouter;