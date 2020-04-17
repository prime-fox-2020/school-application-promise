
const teachersModel = require(`../models/teachersModel`)


class TeachersControllers{
    
    static getTeachersList(req,res){

        teachersModel.getTeachers()
        .then(data =>{
            res.render(`teachers`,{data})
        })
        .catch( err =>{
            res.render(`notfound`,{error: err})
        })
    }

    static notFound(req,res){
        res.render(`notfound.ejs`,{error: `404 - Page Not Found!`})
    }
}


module.exports = TeachersControllers