class HomeController {
    static getHome(req, res){
        res.render('index')
    }
}

module.exports = HomeController