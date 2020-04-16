const express = require('express');
const TeacherController = require('../controllers/TeacherController')
const router = express.Router();

router.get('/', TeacherController.get);
router.get('/:id', TeacherController.getById);

module.exports = router;