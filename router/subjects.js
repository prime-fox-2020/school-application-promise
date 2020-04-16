const router = require('express').Router();
const Subjects = require('../controllers/subjectsController');

router.get('/', Subjects.getData);
router.get('/:id', Subjects.getDataById);


module.exports = router;