const router = require('express').Router();

const studentRout = require('./student');
const teacherRout = require('./teacher');
const subjectRout =  require('./subject');

const Home = require('../controllers/home');

router.get('/', Home.getHome)

router.use('/students',studentRout)
router.use('/teachers',teacherRout)
router.use('/subjects',subjectRout)

module.exports = router;
