const Model = require('../models/model');

class Controller {
    static showData(req, res) {

        Model.showData('students')
            .then(data => {
                res.render('data', { data, alert: req.query.message, table: 'student' });
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static addData(req, res) {
        res.render('inputStudent', { data: [], alert: req.query.message, act: 'ADD' });
    }

    static editData(req, res) {
        Model.editData('students', +req.params.id)
            .then(data => {
                res.render('inputStudent', { data: [data], alert: req.query.message, act: 'EDIT' });
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static dataPost(req, res) {
        Model.dataPost('students', req.body, req.params.id)
            .then(message => {
                if (message.split(' ')[0] !== 'Data') {
                    res.render('inputStudent', { data: [req.body], alert: message, act: req.body.action });
                }
                else res.redirect(`/student?message=${message}`);
            })
            .catch(err => {
                res.render('error', { err });
            });
    }

    static delete(req, res) {
        Model.delete('students', +req.params.id)
            .then(message => {
                res.redirect(`/student?message=${message}`);
            })
            .catch(err => {
                res.render('error', { err });
            });
    }
}

module.exports = Controller;