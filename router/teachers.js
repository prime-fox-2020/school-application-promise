const router = require('express').Router();
const Teachers = require('../controllers/teachersController');

router.get('/', Teachers.getData);
router.get('/:id', Teachers.getDataById);

module.exports = router;