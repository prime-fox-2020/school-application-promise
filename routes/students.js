'use strict';
const routes = require('express').Router();
const StudentsController = require('../controllers/StudentsController');

routes.get('/', StudentsController.showList);
routes.get('/edit/:id', StudentsController.editGet);
routes.post('/edit/:id', StudentsController.editPost);
routes.get('/add', StudentsController.addGet);
routes.post('/add', StudentsController.addPost);
routes.get('/delete/:id', StudentsController.deleteGet);
routes.get('/:email', StudentsController.showList);

module.exports = routes;