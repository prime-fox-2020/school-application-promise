const express = require("express");
const app = express()
const router = require("./routes/route")

app.set('view engine', 'ejs')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended : true }))


//harus pake app.use jangan pake app.get nanti CANNOT GET / (catatan pribadi)
app.use("/", router)


app.listen(3000)