
const express = require(`express`)
const app = express()
const router = require(`./routes/index`)

app.set(`view engine`,`ejs`)
app.use(express.urlencoded({extended : true}))

app.use(`/`,router)
 

app.listen(3000,()=>{
    console.log(` App Listening on Port 3000`)
})