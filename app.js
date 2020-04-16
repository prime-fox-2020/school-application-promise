const express = require('express');
const app = express()
const port = 3000

const router = require('./routes/home')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

// app.get('/',(req, res) => {
//     res.send ('in app.js')
// })

app.use('/',router)

app.listen(port, (req, res) => {
    console.log('App listening ini port :' ,port);
})