const Teachers = require ('../models/teachers')

class Controller {

    static viewTeachers(req,res){
        Teachers.viewTeachers()
            .then(data=>{
                res.render("teachers",{data})
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static edit(req,res){
        const id = req.params.id
        Teachers.edit(id)
            .then(data=>{
                res.render('teacheredit',{data})
            })
            .catch(err=>{
                res.send(err)
            })
    }


    static change(req,res){
        const body = req.body
        Teachers.change(body)
            .then(data=>{
                res.redirect('/teachers')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static delete(req,res){
        const id = req.params.id
        console.log (id)
        Teachers.delete(id)
            .then(data=>{
                res.redirect('/teachers')
            })
            .catch(err=>{
                res.send(err)
            })        
    }

    static addForm(req,res){
        res.render("teacheradd")
    }


    static add(req,res){
        const body = req.body
        Teachers.add(body)
            .then(data=>{
                res.redirect('/teachers')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static selectId(req,res){
        const id = req.params.id
        console.log (id)
        Teachers.selectId(id)
        .then(data=>{
            res.render("teachers",{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}


module.exports = Controller