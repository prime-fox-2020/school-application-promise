const students = require('./students');
const HomeController = require('../controller/homecontroller');
const teachers = require('./teachers');
const router = require('express').Router();
const subjects = require('./subjects')

router.get('/', HomeController.displayHome);
router.use('/students', students);
router.use('/teachers', teachers);
router.use('/subjects', subjects);

module.exports = router;
