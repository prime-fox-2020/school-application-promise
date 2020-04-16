
class HomeController {
    static getHome(req, res){
        res.render('home')
    }

    static notFound(req, res){
        res.render('error', { error: `Page Error - 404`})
    }
}
module.exports = HomeController;