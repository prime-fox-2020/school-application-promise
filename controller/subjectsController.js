const subjectsModels = require("../models/subjectsModel")

class SubjectsController{
    static showSubjectsData(req,res){
        subjectsModels.showSubjects((err,data)=>{
            if(err){
                res.render("error")
            }else{
                res.render("subjects", {subjects : data})
            }
        })
    }

    static findSubjectById(req,res){
        subjectsModels.findSubjectById(req.params.id,(err,data)=>{
            if(err){
                res.render("error")
            }else{
                res.render("subjects", {subjects : data})
            }
        })
    }
}

module.exports = SubjectsController