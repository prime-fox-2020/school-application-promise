const TM = require('../model/teachersModel');

class TeacherController {

  static teacherList(req, res) {
    TM.getTeacher()
    .then(data => {
         return res.render('teachers', {data})
      })
      .catch(err =>{
         throw err
      })
  }

  static teacherListId(req, res) {
    TM.getTeacherId(req.params.id)
    .then(data => {
         return res.render('teachers', {data})
      })
      .catch(err =>{
         throw err
      })
  }

}

module.exports = TeacherController;
