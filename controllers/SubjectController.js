const SubjectModel = require('../models/SubjectModel')

class SubjectController{
    static get(req, res){
        SubjectModel.get()
        .then(data1 =>{
            // res.send(data1)
            res.render('subject', {object: data1.rows})
        })
        .catch(err =>{
            res.send(err)
        })
    }
}

module.exports = SubjectController