const Model = require('../models/model');

class Controller {
    static showData(req, res) {
        Model.showData('subjects')
        .then(data => {
            res.render('data', {data, alert: req.query.message, table:'subject'});
        })
        .catch(err => {
            res.render('error', {err});
        });
    }   

    static addData(req, res) {
        res.render('inputSubject', {data: [], alert: req.query.message, act: 'ADD'});
    }

    static editData(req,res) {
        Model.editData('subjects' ,+req.params.id)
        .then(data => {
            res.render('inputSubject', {data: [data], alert: req.query.message, act: 'EDIT'});
        })
        .catch(err => {
            res.render('error', {err});
        });
    }

    static dataPost(req, res) {
        Model.dataPost('subjects', req.body, req.params.id)
        .then(message => {
            if (message.split(' ')[0] !== 'Data') {
                res.render('inputSubject', { data: [req.body], alert: message, act: req.body.action });
            }
            else res.redirect(`/subject?message=${message}`);
        })
        .catch(err => {
            res.render('error', { err });
        });
    }

    static delete(req, res) {
        Model.delete('subjects', +req.params.id)
            .then(message => {
                res.redirect(`/subject?message=${message}`);
            })
            .catch(err => {
                res.render('error', { err });
            });
    }
}

module.exports = Controller;