const { Router } = require('express')
const route = Router()
route.get('/', (req,res)=>{
    res.render('index.ejs')
})

const teachersRouter = require('./teachersRoute');
const studentsRouter = require('./studentsRoute');
const subjectsRouter = require('./subjectsRoute');
// SHOW
route.use('/teachers', teachersRouter);
route.use('/students', studentsRouter);
route.use('/subjects', subjectsRouter);


module.exports = route