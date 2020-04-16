const SubjectModel = require('../models/subjectModel');

class SubjectController {
    static read(req, res){
        SubjectModel.read()
            .then(data => {
                res.render('subject', {data});
            })
            .catch(err => {
                res.render('error');
            })
    }

    static getId(req, res){
        SubjectModel.getId(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.render('error');
            }) 
    }
}

module.exports = SubjectController;