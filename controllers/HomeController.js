
class HomeController {
    static getHome(req,res){
        res.render('./home.ejs')
    }
}

module.exports = HomeController