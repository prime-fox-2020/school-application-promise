const router = require('express').Router();
const Controller = require('../controllers/teacherController');

router.get('/', Controller.showData);
router.get('/add', Controller.addData);
router.post('/add', Controller.dataPost);
router.get('/:id/edit', Controller.editData);
router.post('/:id/edit', Controller.dataPost);
router.get('/:id/delete', Controller.delete);

module.exports = router;