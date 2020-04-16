const express = require('express');
const router = require('./routes/index');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use('/' , router);

app.listen(PORT, () => console.log('Listening on port:', PORT));