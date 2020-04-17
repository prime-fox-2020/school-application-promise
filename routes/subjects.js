const router = require('express').Router();

const subjectsController = require('../controller/subjectsController');

router.get('/', subjectsController.showSubject);
router.get('/:id', subjectsController.getById);

module.exports = router;
