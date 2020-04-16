const express = require('express');
const SubjectController = require('../controllers/SubjectController')
const router = express.Router();

router.get('/', SubjectController.get);

module.exports = router;