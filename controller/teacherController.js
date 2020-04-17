const modelTeacher=require('../model/modelTeacher')

class TeacherController{
    static getData(req,res){
        modelTeacher.getData((err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('teacher',{data})
            }
        })
    }
    static filterGet(req,res){
        modelTeacher.filterGet(req.params.id,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('teacher',{data})
            }
        })
    }

    static postData(req,res){
        modelTeacher.search(req.body.Semail,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('teacher',{data,alert:''})
            }
        })
    }
}

module.exports=TeacherController