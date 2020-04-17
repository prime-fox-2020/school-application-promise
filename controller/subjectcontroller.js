const Subjects = require ('../models/subjects')


class Controller {

    static viewSubjects(req,res){
        Subjects.viewSubjects()
            .then(data=>{
                res.render("subjects",{data})
            })
            .catch(err=>{
                console.log(err)
                res.send(err)
            })
    }

    static editSubject(req,res){
        const id = req.params.id
        Subjects.editSubject(id)
            .then(data=>{
                res.send(data)
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static selectId(req,res){
        const id = req.params.id
        console.log (id)
        Subjects.selectId(id)
            .then(data=>{
                console.log(data)
                res.render("subjects",{data})
            })     
            .catch(err=>{
                res.send(err)
            })   
    }

        


}


module.exports = Controller