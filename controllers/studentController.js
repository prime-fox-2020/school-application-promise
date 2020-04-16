const StudentModel = require('../models/studentModel');

class StudentController{
    static read(req, res){
        StudentModel.read()
            .then(data => {
                res.render('student', {data, message: req.query.message});
            })
            .catch(err => {
                res.render('error');
            })
    }

    static add_get(req, res){
        res.render('student_add', {error: req.query.error});
    }

    static add_post(req, res){
        StudentModel.add_post(req)
            .then(() => {
                res.redirect(`/students?message=Success Add Data`);
            })
            .catch(err => {
                let errorMsg = [];

                if(!req.body.birth_date.includes('-')){
                    errorMsg.push('You should use date format (YYYY-MM-DD)');
                }

                let date = req.body.birth_date.split('-').map(el => Number(el));

                if(req.body.first_name === ''){
                    errorMsg.push('First Name is Empty!');
                }
                if(req.body.last_name === ''){
                    errorMsg.push('Last Name is Empty!');
                }
                if(req.body.email === ''){
                    errorMsg.push('Email is Empty!');
                } else if(!req.body.email.includes('@')){
                    errorMsg.push("Your email should use '@'!")
                }
                if(req.body.gender === undefined){
                    errorMsg.push('Gender is Empty!');
                }
                if(req.body.birth_date === ''){
                    errorMsg.push('Birth Date is Empty!');
                }
                if(date[2] > 31) {
                    errorMsg.push("DD isn't more than 31");
                }
                if(date[1] > 12){
                    errorMsg.push("Are u Have month more than 12?");
                }
                if(date[0] > 2020 || date[0] < 1900){
                    errorMsg.push("You can type this if u live in this century!")
                }

                res.redirect(`/students/add?error=${errorMsg.join(' ')}`);
            })
    }

    static getEmail(req, res){
        StudentModel.getEmail(req.params.email)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.render('error');
            })
    }

    static edit_get(req, res){
        StudentModel.edit_get(req.params.id)
            .then(data => {
                res.render('student_edit', {error: req.query.error, el: data.el, id: req.params.id, birth_date: data.birth_date});
            })
            .catch(err => {
                res.render('error');
            })
    }

    static edit_post(req, res){
        StudentModel.edit_post(req.params.id, req.body)
            .then(() => {
                res.redirect('/students?message=Success Edit Student');
            })
            .catch(err => {
                let errorMsg = [];

                if(!req.body.birth_date.includes('-')){
                    errorMsg.push('You should use date format (YYYY-MM-DD)');
                }

                let date = req.body.birth_date.split('-').map(el => Number(el));

                if(req.body.first_name === ''){
                    errorMsg.push('First Name is Empty!');
                }
                if(req.body.last_name === ''){
                    errorMsg.push('Last Name is Empty!');
                }
                if(req.body.email === ''){
                    errorMsg.push('Email is Empty!');
                } else if(!req.body.email.includes('@')){
                    errorMsg.push("Your email should use '@'!")
                }
                if(req.body.gender === undefined){
                    errorMsg.push('Gender is Empty!');
                }
                if(req.body.birth_date === ''){
                    errorMsg.push('Birth Date is Empty!');
                }
                if(date[2] > 31) {
                    errorMsg.push("DD isn't more than 31");
                }
                if(date[1] > 12){
                    errorMsg.push("Are u Have month more than 12?");
                }
                if(date[0] > 2020 || date[0] < 1900){
                    errorMsg.push("You can type this if u live in this century!")
                }

                res.redirect(`/students/${req.params.id}/edit?error=${errorMsg.join(' ')}`, );
            })
    }

    static delete(req, res){
        StudentModel.delete(req.params.id)
            .then(() => {
                res.redirect('/students?message=Success Delete Student');
            })
            .catch(err => {
                res.render('error');
            })
    }
}

module.exports = StudentController;