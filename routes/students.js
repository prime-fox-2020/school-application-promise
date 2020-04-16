const express = require('express');
const routes = express.Router();

//get data from controller
const STC = require('../controller/studentsController');


//go to students directory with add as :
routes.get('/', STC.studentList); //student list
routes.get('/add', STC.add); //go to add student page
routes.post('/add', STC.addPost); //add student in student page
routes.get('/:id/edit', STC.edit); //go to edit student page
routes.post('/:id/edit', STC.editPost); //edit student page
routes.get('/:email', STC.studentEmail); //get student with selected email
routes.get('/:id/delete', STC.deleteStudentById) //delete student

//Send data to index (routes)
module.exports = routes;
