class HomeController{
    static getHome(req,res){
        //langsung render view
        res.render("home")
    }

    static notFound(req,res){
        res.render("error")
    }
}

module.exports = HomeController