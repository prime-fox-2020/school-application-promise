class PageController {

  static getHome(req, res) {
    res.render('public/home')
  }

  static notFound(req, res) {
    res.render('public/404', {errMsg: '404 - Page not found!'})
  }
}

module.exports = PageController