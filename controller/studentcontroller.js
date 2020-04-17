const Students = require ('../models/students')

class Controller {

    static viewStudents(req,res){
        Students.viewStudents()
            .then(data=>{
                console.log(data)
                res.render("students",{data})
            })
            .catch(err=>{
                res.send(err)
            })  
        }

    static edit(req,res){
        const id = req.params.id
        Students.edit(id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.render('studentedit',{data})
            }

        })
    }

    static change(req,res){
        const body = req.body
        console.log(body)
        Students.change(body,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.redirect('/students',{error})
            }

        })
    }
    
    static delete(req,res){
        const id = req.params.id
        console.log (id)
        Students.delete(id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.redirect('/students')
            }
            
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
        Students.add(body,(err,data)=>{
            if(err){
                console.log(err)
                if(Array.isArray(err)) {
                res.redirect(`/student/add?error=${err.join(',')}`)
                }
            }else{
                res.redirect('/students')
            }

        })
    }

    static selectEmail(req,res){
        const email = req.params.email
        console.log (email)
        Students.selectEmail(email,(err,data)=>{
            if (err){
                res.send(err)
            }else{
                console.log(data)
                res.render("students",{data})
            }
        })
    }

}


module.exports = Controller