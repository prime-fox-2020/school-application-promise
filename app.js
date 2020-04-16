const express = require('express')
const studentsRoutes = require('./routes/students.js')
const teachersRoutes = require('./routes/teachers.js')
const subjectsRoutes = require('./routes/subjects.js')

const app = express()
app.set('view engine','ejs')
app.listen(3000, ()=> console.log(`Application Online. Port : 3000 `))

app.get('/',(req,res)=>{
    res.render('home')
})
app.use(express.urlencoded({ extended : true}))
app.use(studentsRoutes)
app.use(teachersRoutes)
app.use(subjectsRoutes)