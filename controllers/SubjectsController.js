
const SubjectsModel = require(`../models/subjectsModel`)


class SubjectsControllers{
    
    static getSubjecsList(req,res){

        SubjectsModel.getSubjects()
        .then( data =>{
            res.render(`subjects`,{data})
        })
        .catch(err =>{
            res.render(`notfound`,{error: err})
        })
    }

    static notFound(req,res){
        res.render(`notfound.ejs`,{error: `404 - Page Not Found!`})
    }
}


module.exports = SubjectsControllers