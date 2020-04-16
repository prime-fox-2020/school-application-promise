const express = require('express')
const app = express()
const router = require('./routes/index')
const port = 5000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/', router) //take from routes/index


app.listen(port, () => {
    console.log(`APP CONNECTED AT PORT: ${port}`)
})
