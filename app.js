const express = require('express')
const router = require('./router')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(3000, () => {
  console.log('server is on port 3000')
})