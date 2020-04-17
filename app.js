const express=require('express')
const routes=require('./routes')

const app=express()
const port=3000

app.use(express.urlencoded({extended:true}))
app.use(routes)

app.set('view engine','ejs')

app.listen(port,function(){
    console.log(`Connect to port ${port}`)
})