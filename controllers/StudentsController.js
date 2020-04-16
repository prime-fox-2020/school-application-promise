const ModelStudents = require('../models/ModelStudents')

class StudentsController{
    static getPage(req, res){
        ModelStudents.getStudents()
        .then( result => {
            const data = result.rows
            res.render('students', {data, alert : req.query})               
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }
    static addPage(req, res){
        let error = req.query
        res.render('add-student', {error: error})
    }
    static postAddPage(req, res){
        const err = ModelStudents.valid(req.body)
        if(err.length > 0){
            res.redirect(`/students/add?error=${err.join(', ')}`)
        } else {
            ModelStudents.write(req.body)
            .then( () => {
                const data = `Successfully add new student.`
                res.redirect(`/students?message=${data}&type=success`)
    
            })
            .catch( err => {
                res.render('error', {error : err})
            })
        }
    }

    static delete(req, res) {
        ModelStudents.delete(Number(req.params.id))
        .then(()=>{
            const data = `Successfully deleted student with id ${Number(req.params.id)}`
            res.redirect(`/students?message=${data}&type=success`)
        })
        .catch(err=>{
            res.render('error', {error : err})
        })
            
    }

    static editPage(req, res){
        let error = req.query
        ModelStudents.readWithId(Number(req.params.id))
        .then(data =>{
            res.render('edit-student', {data, error})
        })
        .catch(err=>{
            res.render('error', {error : err})
        })
    }

    static postEditPage(req, res){
        ModelStudents.update(Number(req.params.id), req.body)
        .then( ()=> {
            const msg = `Succesfully edit student with id of ${req.params.id} .`
            res.redirect(`/students?message=${msg}&type=success`)
        })
        .catch( (err) => {
            if(Array.isArray(err)){
                res.redirect(`/students/${req.params.id}/edit?error=${err.join(', ')}`)
            }else{
                res.render('error', {error: err})
            }
        })
    }

    static pageWithEmail(req, res){
        ModelStudents.getPageEmail (req.params.email)
        .then( result => {
            res.render('students', {result, alert : 'manipulate email data complete'})               
        })
        .catch( err => {
            res.render('error', {error: err})
        })
    }
}


module.exports = StudentsController;