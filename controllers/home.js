'use strict'

class HomeController{
  static getHome(req, res){
    res.render('index')
  }

  static notFound(req, res){
    res.send('404 not Found')
  }
}

module.exports = HomeController;