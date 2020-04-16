const Subject = require('../models/subject');

class SubjectController {
    static list(req, res) {
        Subject.list().then(data => {
            res.render('subjects.ejs', {subjects: data});
        }).catch(err => {
            res.send(err);
        });
    }

    static getById(req, res) {
        const findId = Number(req.params.id);
        Subject.getById(findId).then(subject => {
            if(subject) {
                res.send(subject);
            } else {
                res.send('Subject not found');
            }
        }).catch(err => {
            res.send(err);
        })
    }
}

module.exports = SubjectController