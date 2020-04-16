const TeachersModel = require('../model/teachers-model.js')

class TeachersController {
    static showTeachers(req, res) {
        TeachersModel.showTeachers()
            .then(data => {
                res.render('teachers.ejs', {dataTeachers: data, msg: req.query.message})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddForm(req, res) {
        res.render('add-teachers.ejs', {id: req.params.id, error: req.query.error, body: req.body})   
    }
    
    static postAdd(req, res) {
        let fn = false;
        let ln = false;
        let eml = false;
        if (req.body.first_name === '' || req.body.first_name === undefined) {
            res.redirect('/teachers/add?error=First Name harus diisi')
        } else {
            fn = true
        }    
        
        if (req.body.last_name === '' || req.body.last_name === undefined) {
            res.redirect('/teachers/add?error=Last Name harus diisi')
        } else {
            ln = true
        }   
        
        if (req.body.email === '' || req.body.email === undefined) {
            res.redirect('/teachers/add?error=Email harus diisi')
        } else if (req.body.email) {
            if (req.body.email.includes('@')) {
                eml = true;
            } else {
                res.redirect('/teachers/add?error=Email harus ada character @')
            }
        }
    

        if (fn && ln && eml) {
            TeachersModel.postAdd(req.body)
                .then(data => {
                    res.redirect(`/teachers?message=berhasil menambahkan teacher dengan nama ${req.body.first_name} ${req.body.last_name}`)
                })
                .catch(err => {
                    res.redirect('/teachers/add?error=Format date salah')
                })
        }
    }

    static getEditForm(req, res) {
        TeachersModel.getEditForm(req.params.id)
            .then(data => {
                let id = req.params.id                
                res.render('edit-teachers.ejs', {id, data})
            })
            .catch(err => {
                res.render('error-views.ejs')
            })
    }

    static postEdit(req, res) {
        TeachersModel.postEdit(req.body, req.params.id)
            .then(data => {
                res.redirect(`/teachers?message=berhasil edit teacher dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static deleteTeachers(req, res) {
        TeachersModel.deleteTeachers(req.params.id)
            .then(data => {
                res.redirect(`/teachers?message=berhasil menghapus teacher dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static searchTeacherByEmail(req, res) {        
        TeachersModel.searchTeacherByEmail(req.body.email)
            .then(data=> {
                let email = req.body.email
                res.render('teacher-by-email.ejs', {data, email})
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }
}

module.exports = TeachersController