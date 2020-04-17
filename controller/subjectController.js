const modelSubject=require('../model/modelSubject')

class SubjectController{
    static getData(req,res){
        modelSubject.getData((err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('subject',{data})
            }
        })
    }
    static filterGet(req,res){
        modelSubject.filterGet(req.params.id,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('subject',{data})
            }
        })
    }

    static postData(req,res){
        modelSubject.search(req.body.Semail,(err,data)=>{
            if(err){
                res.render(err)
            }else{
                res.render('subject',{data})
            }
        })
    }
}

module.exports=SubjectController