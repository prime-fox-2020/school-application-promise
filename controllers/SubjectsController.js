const SubjectsModel = require("../models/subjectsModel");

class SubjectsController {
  static subjectsList(req, res) {
    SubjectsModel.getSubjects()
      .then(result=>{
        const data = result.rows
        res.render("subjects", { data });
      })
      .catch(err=>{
        res.render("error", { error: err });
      })
  }
}

module.exports = SubjectsController