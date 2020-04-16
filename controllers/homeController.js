class homeController{
    static getHome(req, res) {
        //res.send('this is home page by controller')
        res.render('home.ejs')
    }

    static notFound(req, res) {
        res.render('eror.ejs', {eror : `page not found`})
    }
}

module.exports = homeController

