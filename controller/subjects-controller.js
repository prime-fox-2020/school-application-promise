const SubjectsModel = require('../model/subjects-model.js')

class SubjectsController {
    static showSubjects(req, res) {
        SubjectsModel.showSubjects()
            .then(data => {
                res.render('subjects.ejs', {dataSubjects: data, msg: req.query.message})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddForm(req, res) {
        res.render('add-subjects.ejs', {id: req.params.id, error: req.query.error, body: req.body})   
    }
    
    static postAdd(req, res) {
        let sn = false;

        if (req.body.subject_name === '' || req.body.subject_name === undefined) {
            res.redirect('/subjects/add?error=Subject Name harus diisi')
        } else {
            sn = true
        }    
    
        if (sn) {
            SubjectsModel.postAdd(req.body)
                .then(data => {
                    res.redirect(`/subjects?message=berhasil menambahkan subject dengan nama ${req.body.subject_name}`)
                })
                .catch(err => {
                    res.redirect('/subjects/add')
                })
        }
    }

    static getEditForm(req, res) {
        SubjectsModel.getEditForm(req.params.id)
            .then(data => {
                let id = req.params.id                
                res.render('edit-subjects.ejs', {id, data})
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static postEdit(req, res) {
        SubjectsModel.postEdit(req.body, req.params.id)
            .then(data => {
                res.redirect(`/subjects?message=berhasil edit subject dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static deleteSubject(req, res) {
        SubjectsModel.deleteSubject(req.params.id)
            .then(data => {
                res.redirect(`/subjects?message=berhasil menghapus subject dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }
}

module.exports = SubjectsController