const routes = require('express').Router();
const {Home, Teachers, Students, Subjects} = require('../controllers')

routes.get('/', Home.render)

/* 
* RENDERING TEACHERS PAGE
*/
routes.get('/teachers/:selector', Teachers.render)
routes.get('/teachers', Teachers.render)
/* 
* RENDERING STUDENTS PAGE
*/
routes.get('/students/:selector', Students.render)
routes.get('/students', Students.render)
/* 
* RENDERING SUBJECTS PAGE
*/
routes.get('/subjects/:selector', Subjects.render)
routes.get('/subjects', Subjects.render)

/* 
* ADD NEW POST ROUTING
*/
routes.post('/teachers/add', Teachers.post)
routes.post('/students/add', Students.post)
routes.post('/subjects/add', Subjects.post)
/* 
* EDIT POST ROUTING
*/
routes.post('/students/update', Students.post)
routes.post('/teachers/update', Teachers.post)

routes.get('*', (request, response) => {
    response.status(404).render('404')
})

module.exports = routes;