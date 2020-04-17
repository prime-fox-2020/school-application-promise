const TeachersModel = require("../models/teachersModel")

class ControllerTeachers {
    static get(req, res) {
        TeachersModel.getTeachers()
        .then(data => {
            res.render("teachers", { teachers: data })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static getId(req, res){
        TeachersModel.getId(req.params.id)
        .then(data => {
            res.render("teachers", { teachers : data })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = ControllerTeachers