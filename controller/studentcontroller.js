const Students = require ('../models/students')

class Controller {

    static viewStudents(req,res){
        Students.viewStudents()
            .then(data=>{
                res.render("students",{data})
            })
            .catch(err=>{
                res.send(err)
            })  
        }

    static edit(req,res){
        const id = req.params.id
        Students.edit(id)
            .then(data=>{
                res.render("studentedit",{data})
            })
            .catch(err=>{
                res.send(err)
            }) 

    }

    static change(req,res){
        const body = req.body
        Students.change(body)
            .then(data=>{
                res.rendirect('/students')
            })
            .catch(err=>{
                console.log(err)
                // res.render('students',{err})
            })
    }
    
    static delete(req,res){
        const id = req.params.id
        console.log (id)
        Students.delete(id)
            .then(data=>{
                res.redirect('/students')
            })
            .catch(err=>{
                res.send(err)
            })
    }


    static addForm(req,res){
        const error= req.query.error
        console.log(error)
        res.render("studentadd",{error})
    }


    static add(req,res){
        const body = req.body
        console.log(body)
        Students.add(body)
            .then(data=>{
                res.redirect('/students')
            })
            .catch(err=>{
                if(Array.isArray(err)) {
                    res.redirect(`/student/add?error=${err.join(',')}`)
                    }
            })
    }

    static selectEmail(req,res){
        const email = req.params.email
        Students.selectEmail(email)
            .then(data=>{
                res.render("students",{data})
            })
            .catch(err=>{
                res.send(err)
            })
    }
}


module.exports = Controller