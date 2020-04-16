const router = require('express').Router();

const students = require('./students');
const subjects = require('./subjects');
const teachers = require('./teachers');

router.get('/', (req, res) => {
  res.render('home');
})

router.use('/students', students);
router.use('/subjects', subjects);
router.use('/teachers', teachers);

router.get('/*', (req, res) => {
  res.render('error', {msg: 'Page not found'});
})

module.exports = router;