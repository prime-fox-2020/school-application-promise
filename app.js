'use strict'

const express     = require('express')
const app         = express()
const port        = 3000 || process.env.PORT

const router = require('./routes')


//SetUp 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extends: true}))

app.use('/', router)


app.listen(port, () => console.log('School app is started'))