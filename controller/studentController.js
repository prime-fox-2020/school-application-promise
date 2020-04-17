const modelStudent=require('../model/modelStudent')

class StudentController{
    static getData(req,res){
        modelStudent.getData()
        .then( data => {
            res.render('student',{data, alert : req.query })               
        })
        .catch( err => {
            res.render(err)
        })
    }

    static filterGet(req,res){
        modelStudent.filterGet(req.params.email)
        .then( data => {
            res.render('student',{data,alert:''})               
        })
        .catch( err => {
            res.render(err)
        })
    }

    static addGet(req,res){
        const error=req.query.error
        res.render('add',{error})   
    }

    static addPost(req,res){
        modelStudent.addPost(req.body.fname,req.body.lname,req.body.email,req.body.gender,req.body.birthdate,(err,data)=>{
            if(err){
                if(Array.isArray(err)){
                    res.redirect(`/students/add?error=${err}`)
                }else{
                    res.render(err)
                }
            }else{
                // res.render('add')
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }
    static editGet(req,res){
        modelStudent.editGet(req.params.id,(err,data)=>{
            const error=req.query.error
            if(err){
                res.render(err)
            }else{
                res.render('edit',{data,error})
            }
        })
    }

    static editPost(req,res){
        modelStudent.editPost(Number(req.params.id),req.body.fname,req.body.lname,req.body.email,req.body.gender,req.body.birthdate,(err,data)=>{
            if(err){
                if(Array.isArray(err)){
                    res.redirect(`/students/${req.params.id}/edit?error=${err}`)
                }
                res.render(err)
            }else{
                res.redirect(`/students?message=${data}&type=success`)
            }
        })
    }

    static deletePost(req,res){
        modelStudent.deletePost(req.params.id,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.redirect(`/students?message=${data}&type=danger`)
            }
        })
    }

    static postData(req,res){
        modelStudent.search(req.body.Semail,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('student',{data,alert:''})
            }
        })
    }
}

module.exports=StudentController