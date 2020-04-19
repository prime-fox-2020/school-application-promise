class HomeController{
    static getHome(req, res){
        res.render('homepage')
    }
    static notFound(req, res){
        res.render('errorpage',{error:`404 Page Not Found`})
    }

}

module.exports = HomeController