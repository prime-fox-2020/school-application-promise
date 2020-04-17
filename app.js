const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const port = 3000;

const routes = require('./routes')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes);

// app.get('/', (req,res)=>{
//   res.send('ini halaman /')
// })

app.listen(port, ()=>{
  console.log('halooo di port: ' + port)
})

