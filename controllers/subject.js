const SubjectModel = require('../models/subject');

class Subject {
    static show(req, res) {
        // res.send('ini di subject controller')
        SubjectModel.read((err, data) => {
            if (err) {
                res.send(err)
            } else {
                console.log(data, '////');
                res.render('subjects', { subjects: data })
            }
        })
    }
}

module.exports = Subject;