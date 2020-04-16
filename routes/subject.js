const router = require('express').Router();

const subjectCtrl = require('../controllers/subject');

router.get('/',subjectCtrl.show)

module.exports = router;