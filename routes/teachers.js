const router = require('express').Router();

const teachersController = require('../controller/teachersController');

router.get('/', teachersController.showTeacher);
router.get('/:id', teachersController.getById);

module.exports = router;
