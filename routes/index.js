const router = require('express').Router();
const Controller = require('../controllers/homeController');
const teacher = require('./teacher');
const subject = require('./subject');
const student = require('./student');

router.get('/', Controller.home);
router.use('/teacher', teacher);
router.use('/subject', subject);
router.use('/student', student);
router.get('/*', Controller.notFound);

module.exports = router;