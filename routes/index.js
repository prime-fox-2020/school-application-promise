const express = require('express');
const HomeController = require('../controllers/HomeController')
const routesTeacher = require('./teacher');
const routesStudent = require('./student');
const routesSubject = require('./subject');
const router = express.Router();

router.get('/', HomeController.getHome);
router.use('/teacher', routesTeacher);
router.use('/student', routesStudent);
router.use('/subject', routesSubject);
router.get('/*', HomeController.notFound);

module.exports = router;