const StudentsModel = require('../models/students')

class StudentsController {
    static getAll(req, res){
        // StudentsModel.getAll((err, data) => {
        //     if (err) {
        //         res.render('error', { error: err })
        //     } else {
        //         res.render('students', { students: data })
        //     }
        // })
        StudentsModel.getAll()
            .then(data => {res.render('students', { students: data })})
            .catch(err => {res.render('error', { error: err })})
    }

    static showForm(req, res) {
        let error = req.query
        res.render('addStudent', {error})
    }

    static addProcess(req, res) {
        // StudentsModel.addProcess(req.body, (err, data) => {
        //     if (err) {
        //         if(Array.isArray(err)) {
        //             res.redirect(`/students/add?error=${err.join(', ')}`)
        //         } else {
        //             res.render('error', { error: err })
        //         }
        //     } else {
        //         res.redirect('/students')
        //     }
        // })
        const errorMessage = StudentsModel.validation(req.body)
        if(errorMessage.length > 0){
            res.redirect(`/students/add?error=${errorMessage.join(', ')}`)
        }else{
            StudentsModel.addProcess(req.body)
                .catch(err => {res.render('error', { error: err })})
                .then(res.redirect('/students'))
        }
    }

    static deleteProcess(req, res) {
        // StudentsModel.deleteProcess(Number(req.params.id), (err) => {
        //     if (err) {
        //         res.render('error', { error: err })
        //     } else {
        //         res.redirect('/students')
        //     }
        // })
        StudentsModel.deleteProcess(Number(req.params.id))
            .catch(err => {res.render('error', { error: err })})
            .then(res.redirect('/students'))
    }

    static showEditForm(req, res) {
        let error = req.query
        // StudentsModel.getOne(Number(req.params.id), (err, data) => {
        //     if (err) {
        //         res.render('error', { error: err })
        //     } else {
        //         res.render('editStudent', { students: data, error: error })
        //     }
        // })
        StudentsModel.getOne(Number(req.params.id))
            .catch(err => {res.render('error', { error: err })})
            .then(data => {res.render('editStudent', { students: data, error: error })})
    }

    static editProcess(req, res) {
        // StudentsModel.editProcess(Number(req.params.id), req.body, (err) => {
        //     if (err) {
        //         if(Array.isArray(err)) {
        //             res.redirect(`/students/${req.params.id}/edit?error=${err.join(', ')}`)
        //         } else {
        //             res.render('error', { error: err })
        //         }
        //     } else {
        //         res.redirect('/students')
        //     }
        // })
        const errorMessage = StudentsModel.validation(req.body)
        if(errorMessage.length > 0){
            res.redirect(`/students/${req.params.id}/edit?error=${errorMessage.join(', ')}`)
        }else{
            StudentsModel.editProcess(Number(req.params.id), req.body)
                .catch(err => res.render('error', { error: err }))
                .then(res.redirect('/students'))
        }
        
    }

    static getByEmail(req, res){
        // StudentsModel.getByEmail(req.params.email, (err, data) => {
        //     if (err) {
        //         res.render('error', { error: err })
        //     } else {
        //         res.render('students', {students: data})
        //     }
        // })
        StudentsModel.getByEmail(req.params.email)
            .catch(err => {res.render('error', { error: err })})
            .then(data => {res.render('students', {students: data})})
    }
}


module.exports = StudentsController