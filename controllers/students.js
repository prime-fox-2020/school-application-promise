const Student = require('../models/students');

class StudentController {
    static list(req, res) {
        if(req.query.email) {
            Student.findByEmail(req.query.email).then(data => {
                let passData = {students: data};
                if(req.query.success) {
                    passData.alert = {type: 'success', message: req.query.success};
                }
                res.render('students.ejs', passData);
            }).catch(err => {
                res.send(err);
            });
        } else {
            Student.list().then(data => {
                let passData = {students: data};
                if(req.query.success) {
                    passData.alert = {type: 'success', message: req.query.success};
                }
                res.render('students.ejs', passData);
            }).catch(err => {
                res.send(err);
            });
        }
    }

    static showAddForm(req, res) {
        let passData = {mode: 'add'};
        if(req.query.error) {
            req.query.error = req.query.error.split('<br>');
            passData.alert = {type: 'danger', message: req.query.error};
        }
        res.render('addStudents.ejs', passData);
    }

    static add(req, res) {
        let field = req.body;
        StudentController.validateStudentForm(field).then(errors => {
            if(errors && errors.length) {
                res.redirect(`/students/add?error=${errors.join('<br>')}`);
            } else {
                return Student.add(field.first_name, field.last_name, field.email, field.gender, field.birth_date);
            }
        }).then(() => {
            res.redirect('/students');
        }).catch(err => {
            res.send(err);
        });
    }

    static validateStudentForm(data) {
        return new Promise((resolve, reject) => {
            let errors = [];
            if(!data.first_name || data.first_name.length > 50) {
                errors.push('First Name harus diisi dan maksimal memiliki 50 karakter.');
            }
            if(!data.last_name || data.last_name.length > 50) {
                errors.push('Last Name harus diisi dan maksimal memiliki 50 karakter.');
            }
            if(!data.email || data.email.length > 50) {
                errors.push('Email harus diisi dan maksimal memiliki 50 karakter.');
            }
            if(!data.gender || (data.gender.toLowerCase() !== 'male' && data.gender.toLowerCase() !== 'female')) {
                errors.push('Pilih Gender yang tersedia.');
            }
            if(!data.birth_date) {
                errors.push('Birth date harus diisi.');
            }
            resolve(errors);
        });
    }

    static getByEmail(req, res) {
        let findEmail = req.params.email;
        Student.getByEmail(findEmail).then(data => {
            if(data) {
                res.send(data);
            } else {
                res.send('Student not found');
            }
        }).catch(err => {
            res.send(err);
        });
    }

    static showEditForm(req, res) {
        let id = Number(req.params.id);
        Student.getById(id).then(data => {
            if(data) {
                // data.birth_date = `${data.birth_date.getFullYear()}-${data.birth_date.getMonth()+1}-${data.birth_date.getDate()}`;
                let passData = {student: data, mode: 'edit'};
                if(req.query.error) {
                    req.query.error = req.query.error.split('<br>');
                    passData.alert = {type: 'danger', message: req.query.error};
                }
                res.render('addStudents.ejs', passData);
            } else {
                res.send('Student not found');
            }
        }).catch(err => {
            res.send(err);
        });
    }

    static edit(req, res) {
        let id = Number(req.params.id);
        let editedStudentData = req.body;
        Student.getById(id).then(data => {
            if(data) {
                return StudentController.validateStudentForm(editedStudentData);
            } else {
                res.send('Student not found');
            }
        }).then(errors => {
            if(errors && errors.length) {
                res.redirect(`/students/${id}/edit?error=${errors.join('<br>')}`);
            } else {   
                return Student.edit(id, editedStudentData.first_name, editedStudentData.last_name, editedStudentData.email, editedStudentData.gender, new Date(editedStudentData.birth_date));
            }
        }).then(() => {
            res.redirect('/students?success=Student data edited successfully');
        }).catch(err => {
            res.send(err);
        });
    }

    static delete(req, res) {
        let id = Number(req.params.id);
        Student.getById(id).then(data => {
            if(data) {
                return Student.delete(id);
            } else {
                res.send('Student not found');
            }
        }).then(() => {
            res.redirect('/students');
        }).catch(err => {
            res.send(err);
        });
    }
}

module.exports = StudentController; 