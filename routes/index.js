'use strict';
const router = require('express').Router();
const teacherRoutes = require('./teachers');
const studentRoutes = require('./students');
const subjectRoutes = require('./subjects');

const PageController = require('../controllers/PageController');

router.get('/', PageController.getHome);
router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);
router.use('/subjects', subjectRoutes);
router.get('/*', PageController.notFound);

module.exports = router;