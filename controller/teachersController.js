const teachersModels = require("../models/teachersModel")

class TeachersController{
    static showTeachersData(req,res){
        teachersModels.showTeachers((err,data)=>{
            if(err){
                res.render("error")
            }else{
                res.render("teachers", {teachers : data})
            }
        })
    }

    static findTeacherById(req,res){
        teachersModels.findTeacherById(req.params.id, (err,data) =>{
            if(err){
                res.render("error")
            }else{
                res.render("teachers", {teachers : data})
            }
        })
    }
}

module.exports = TeachersController