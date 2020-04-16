const SubjectModel = require('../models/SubjectModel')

class SubjectController{
    static get(req, res) {
        SubjectModel.get()
        .then(data => {
            return res.render('subject', { object: data });
        })
        .catch(err => {
            throw err
        })
        // SubjectModel.get((err, data) => {
        //     if (err) {
        //         res.render('error', { error: err });
        //     } else {
        //         res.render('subject', { object: data });
        //     }
        // })
    }

}

module.exports = SubjectController;