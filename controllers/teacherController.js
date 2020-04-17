const Model = require('../models/model');

class Controller {
    static showData(req, res) {
        Model.showData('teachers')
        .then(data => {
            res.render('data', {data, alert: req.query.message, table:'teacher'});
        })
        .catch(err => {
            res.render('error', {err});
        });
    }   

    static addData(req, res) {
        res.render('inputTeacher', {data: [], alert: req.query.message, act: 'ADD'});
    }

    static editData(req,res) {
        Model.editData('teachers' ,+req.params.id)
        .then(data => {
            res.render('inputTeacher', {data: [data], alert: req.query.message, act: 'EDIT'});
        })
        .catch(err => {
            res.render('error', {err});
        });
    }

    static dataPost(req, res) {
        Model.dataPost('teachers', req.body, req.params.id)
        .then(message => {
            if (message.split(' ')[0] !== 'Data') {
                res.render('inputTeacher', { data: [req.body], alert: message, act: req.body.action });
            }
            else res.redirect(`/teacher?message=${message}`);
        })
        .catch(err => {
            res.render('error', { err });
        });
    }

    static delete(req, res) {
        Model.delete('teachers', +req.params.id)
            .then(message => {
                res.redirect(`/teacher?message=${message}`);
            })
            .catch(err => {
                res.render('error', { err });
            });
    }
}

module.exports = Controller;