const router = require('express').Router();
const Students = require('../controllers/studentsController');

router.get('/', Students.getData);
router.post('/search', Students.search);
router.get('/add', Students.addDataGet);
router.post('/add', Students.addData);
router.get('/:id/edit', Students.editDataGet);
router.post('/:id/edit', Students.editData);
router.get('/:id/delete', Students.deleteData);
router.get('/:email', Students.getDataByEmail);

module.exports = router;