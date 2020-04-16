'use strict';
// Buat dulu database dengan nama school dan jalankan setup-seeding.js
const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use(router);

app.listen(3000, () => console.log("Now i'm listening at port 3000"));