const Subjects = require ('../models/subjects')


class Controller {

    static viewSubjects(req,res){
        Subjects.viewSubjects((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.render("subjects",{data})
            }
        })
    }

    static editSubject(req,res){
        const id = req.params.id
        Subjects.editSubject(id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.send(data)
            }

        })
    }

    static selectId(req,res){
        const id = req.params.id
        console.log (id)
        Subjects.selectId(id,(err,data)=>{
            if (err){
                res.send(err)
            }else{
                console.log(data)
                res.render("subjects",{data})
            }
        })
    }
        


}


module.exports = Controller