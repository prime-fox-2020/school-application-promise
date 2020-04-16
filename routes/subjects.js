const express = require('express');
const routes = express.Router();
const SC = require('../controller/subjectsController');

routes.get('/', SC.subjectList);
routes.get('/:id', SC.subjectListId);

module.exports = routes;
