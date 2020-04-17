const Teachers = require ('../models/teachers')

class Controller {

    static viewTeachers(req,res){
        Teachers.viewTeachers((err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.render("teachers",{data})
            }
        })
    }

    static edit(req,res){
        const id = req.params.id
        Teachers.edit(id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.render('teacheredit',{data})
            }

        })
    }

    static change(req,res){
        const body = req.body
        Teachers.change(body,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.redirect('/teachers')
            }

        })
    }

    static delete(req,res){
        const id = req.params.id
        console.log (id)
        Teachers.delete(id,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.redirect('/teachers')
            }
            
        }) 
    }

    static addForm(req,res){
        res.render("teacheradd")
    }


    static add(req,res){
        const body = req.body
        Teachers.add(body,(err,data)=>{
            if(err){
                res.send(err)
            }else{
                res.redirect('/teachers')
            }

        })
    }

    static selectId(req,res){
        const id = req.params.id
        console.log (id)
        Teachers.selectId(id,(err,data)=>{
            if (err){
                res.send(err)
            }else{
                console.log(data)
                res.render("teachers",{data})
            }
        })
    }

}


module.exports = Controller