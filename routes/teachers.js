const express = require('express');
const routes = express.Router();
const TC = require('../controller/teachersController');

routes.get('/', TC.teacherList);
routes.get('/:id', TC.teacherListId);

module.exports = routes;
