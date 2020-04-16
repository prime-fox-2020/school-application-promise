const express = require('express')
const ControllerTeachers = require('../controller/teachersController.js')

const routes = express.Router()

routes.get('/teachers', ControllerTeachers.getAll)
routes.get('/teachers/:id',ControllerTeachers.getId)

module.exports = routes