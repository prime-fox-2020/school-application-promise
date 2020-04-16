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
        const error = req.query
        res.render('add-student', {error})
    }
    static postAddPage(req, res){
        const err = ModelStudents.validate(req.body)
        if(err.length > 0){
            res.redirect(`/students/add?error=${err.join(', ')}`)
        } else {
            ModelStudents.write(req.body)
            .then( () => {
                const data = `New student has been added.`
                res.redirect(`/students?message=${data}&type=success`)
    
            })
            .catch( err => {
                res.render('error', {error : err})
            })
        }
    }

    static delete(req, res) {
        ModelStudents.delete(Number(req.params.id))
        .then( () => {
            const msg = `Student with id ${Number(req.params.id)} has been deleted.`
            res.redirect(`/students?message=${msg}&type=success`)
        })
        .catch ( err => {
            res.render('error', {error : err})
        })
    }
    static editPage(req, res){
        const error = req.query
        ModelStudents.readWithId(Number(req.params.id))
        .then( result => {
            const data = result.rows
            res.render('edit-student', {data, error})
        })
        .catch( err => {
            res.render('error', {error : err})
        })
    }

    static postEditPage(req, res){
        const error = ModelStudents.validate(req.body)
        if(error.length > 0){
            res.redirect(`/students/${req.params.id}/edit?error=${error.join(', ')}`)
        } else {
            ModelStudents.update(Number(req.params.id), req.body)
            .then( ()=> {
                const msg = `Student with id ${req.params.id} has been edited.`
                res.redirect(`/students?message=${msg}&type=success`)
            })
            .catch( (err) => {
                res.render('error', {error: err})
            })
        }
    }

    static pageWithEmail(req, res){
        ModelStudents.getPageEmail(req.params.email)
        .then( (result) => {
            const data = result.rows
            res.render('students', {data, alert : ''})
        })
        .catch( (err) => {
            res.render('error', {error: err})
        })
    }
}

module.exports = StudentsController