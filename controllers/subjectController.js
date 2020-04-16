const SubjectModel = require('../models/subjectModel')

class SubjectController{
    // static subjectListGet(req,res){
    //     SubjectModel.getSubjectList((err,data) => {
    //         if (err){
    //             res.render('errorpage',{error:err})
    //         } else {
    //             res.render('subjectpage',{data})
    //         }
    //     })
    // }
    static subjectListGet(req,res){
        SubjectModel.getSubjectList()
        .then(result => {
            // console.log(result)
            res.render('subjectpage',{data:result.rows})
        })
        .catch(error =>{
            res.render('errorpage',{error})
        })
        
    }

    // static subjectListIdGet(req,res){
    //     SubjectModel.getSubjectIdList(Number(req.params.id), (err,data)=> {
    //         if (err){
    //             res.render('errorpage',{error:err})
    //         } else {
    //             res.render('subjectpage',{data})
    //         }
    //     })
    // }
    static subjectListIdGet(req,res){
        SubjectModel.getSubjectIdList(Number(req.params.id))
        .then(result => {
            res.render('subjectpage',{data:result.rows})
        })
        .catch(error => {
            res.render('errorpage',{error})
        })        
    }
}

module.exports = SubjectController