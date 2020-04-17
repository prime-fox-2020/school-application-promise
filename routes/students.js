'use strict'

const express   = require('express')
const students  = require('../controllers/students')
const router    = express.Router()

router.get  ('/',           students.getStudents)
router.post ('/',           students.addPost)
router.get  ('/add',        students.addGet)
router.get  ('/:id/edit',   students.editGet)
router.post ('/:id/edit',   students.editPost)
router.get  ('/:id/delete', students.deleteGet)
router.get  ('/:email',     students.getByEmail)

module.exports = router