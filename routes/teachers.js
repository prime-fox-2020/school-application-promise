'use strict';
const routes = require('express').Router();
const TeachersController = require('../controllers/TeachersController');

routes.get('/', TeachersController.showList);
routes.get('/:id', TeachersController.showList);

module.exports = routes;