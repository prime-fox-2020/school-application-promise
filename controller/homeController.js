class HomeController {
  
  static getHome(req, res) {
    res.render('home')
  }

  static getError(req, res) {
    res.render('error', {error: `404 Not Found!`})
  }
}

module.exports = HomeController