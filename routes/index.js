const express = require('express');
const routes = express.Router();

//get data from controller as homepage
const homeController = require('../controller/homeController');

//get data from routes (same folder)
const students = require('../routes/students');
const teachers = require('../routes/teachers');
const subjects = require('../routes/subjects');

//set as homepage
routes.get('/', homeController.getHome);

//to go to this directory -> localhost3000/
routes.use('/students', students); // /students
routes.use('/teachers', teachers); // /teachers
routes.use('/subjects', subjects); // /subjects

//send data to app
module.exports = routes;
