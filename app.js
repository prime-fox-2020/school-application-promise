const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(indexRouter)

app.listen(port, (req, res) => {
    console.log('Berjalan di port ' + port);  
})