const StudentsModel = require('../model/students-model.js')

class StudentsController {
    static showStudents(req, res) {
        StudentsModel.showStudents()
            .then(data => {
                res.render('students.ejs', {dataStudents: data, msg: req.query.message})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddForm(req, res) {
        res.render('add-students.ejs', {id: req.params.id, error: req.query.error, body: req.body})   
    }
    
    static postAdd(req, res) {
        let fn = false;
        let ln = false;
        let eml = false;
        let bd = false;
        if (req.body.first_name === '' || req.body.first_name === undefined) {
            res.redirect('/students/add?error=First Name harus diisi')
        } else {
            fn = true
        }    
        
        if (req.body.last_name === '' || req.body.last_name === undefined) {
            res.redirect('/students/add?error=Last Name harus diisi')
        } else {
            ln = true
        }   
        
        if (req.body.email === '' || req.body.email === undefined) {
            res.redirect('/students/add?error=Email harus diisi')
        } else if (req.body.email) {
            if (req.body.email.includes('@')) {
                eml = true;
            } else {
                res.redirect('/students/add?error=Email harus ada character @')
            }
        }
    
        if (req.body.birth_date === '' || req.body.birth_date === undefined) {
            res.redirect('/students/add?error=Birth Date harus diisi')
        } else {
            bd = true
        } 

        if (fn && ln && eml && bd) {
            StudentsModel.postAdd(req.body)
                .then(data => {
                    res.redirect(`/students?message=berhasil menambahkan student dengan nama ${req.body.first_name} ${req.body.last_name}`)
                })
                .catch(err => {
                    res.redirect('/students/add?error=Format date salah')
                })
        }
    }

    static getEditForm(req, res) {
        StudentsModel.getEditForm(req.params.id)
            .then(data => {
                let id = req.params.id
                res.render('edit-students.ejs', {id, data})
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static postEdit(req, res) {
        StudentsModel.postEdit(req.body, req.params.id) 
            .then(data => {
                res.redirect(`/students?message=berhasil edit student dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static deleteStudent(req, res) {
            StudentsModel.deleteStudent(req.params.id) 
            .then(data=> {
                res.redirect(`/students?message=berhasil menghapus student dengan id ${req.params.id}`)
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }

    static searchStudentByEmail(req, res) {        
        StudentsModel.searchStudentByEmail(req.body.email)
            .then(data=> {
                let email = req.body.email            
                res.render('student-by-email.ejs', {data, email})
            })
            .catch(err => {
                res.render('error-views.ejs', {error: err})
            })
    }
}

module.exports = StudentsController