const SubjectModel = require("../models/subjectsModel")

class ControllerSubjects {
    static get(req, res) {
        SubjectModel.getSubjects()
        .then(data => {
            res.render("subjects", { subjects: data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getId(req, res){
        SubjectModel.getId(req.params.id)
        .then(data => {
            res.render("subjects", { subjects : data })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerSubjects