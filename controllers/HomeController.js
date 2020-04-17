
class HomeControllers{

    constructor(){

    }

    static getHome(req,res){

        res.render(`home.ejs`)
    }

    static notFound(req,res){
        res.render(`notfound.ejs`,{error: `404 - Page Not Found!`})
    }
}


module.exports = HomeControllers