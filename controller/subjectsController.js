const SM = require('../model/subjectsModel');

class SubjectController {

  static subjectList(req, res) {
    SM.getSubject()
    .then(data => {
         return res.render('subjects', {data})
      })
      .catch(err =>{
         throw err
      })
  }

  static subjectListId(req, res) {
    SM.getSubjectId(req.params.id)
    .then(data => {
         return res.render('subjects', {data})
      })
      .catch(err =>{
         throw err
      })
  }


}

module.exports = SubjectController;
