'use strict'

const express = require('express');
const server = new express();
const parser = require('body-parser');
const routes = require('../routers')

class WebServer {
    static LoadServer() {
        server.use(parser.urlencoded({extended: true}));
        server.use(parser.json());
        server.set('view engine', 'ejs');
        server.use('/assets', express.static('public/assets'))
        server.use('/', routes)
        server.listen(3000, () => console.log('Started on port 3000'))
    }
}

module.exports = WebServer