const route = require('express').Router();
const Controller = require('../controllers/subjectController');

route.get('/', Controller.read);
route.get('/:id', Controller.getId);

module.exports = route;