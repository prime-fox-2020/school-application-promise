const route = require('express').Router();

route.get('/', (req, res) => res.render('home'));

route.use('/teachers', require('./teacher'));
route.use('/students', require('./student'));
route.use('/subjects', require('./subject'));

module.exports = route;