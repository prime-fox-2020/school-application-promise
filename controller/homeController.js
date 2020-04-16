class HomeController {

  static getHome(req, res) {
    //go to (views) home.ejs
    res.render('home');
  }

}

//Send data to routes
module.exports = HomeController;
