const { Router } = require('express');
const fs = require('fs');
const TeacherController = require('../controllers/teachers');

const teachersRouter = Router();
teachersRouter.get('/', TeacherController.list);
teachersRouter.get('/:id', TeacherController.getById);

module.exports = teachersRouter