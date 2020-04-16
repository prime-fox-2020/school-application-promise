const express = require('express');
const StudentController = require('../controllers/StudentController')
const router = express.Router();

router.get('/', StudentController.get);
router.get('/add', StudentController.add);
router.post('/add', StudentController.addPost);
router.get('/:id/edit', StudentController.edit);
router.post('/:id/edit', StudentController.editPost);
router.get('/:id/delete', StudentController.delete);

module.exports = router;