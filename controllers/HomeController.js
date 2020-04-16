class HomeController {

  static getHome(req, res){
    res.render('home')
  }

  static notFound(req, res){
    res.render('error', {error: `404 - Page not found!`})
  }
}

module.exports = HomeController