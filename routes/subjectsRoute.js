const { Router } = require('express');
const fs = require('fs');
const SubjectController = require('../controllers/subjects');

const subjectsRouter = Router();

subjectsRouter.get('/', SubjectController.list);
subjectsRouter.get('/:id', SubjectController.getById);

module.exports = subjectsRouter
