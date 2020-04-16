const TeachersModel = require("../models/teachersModel");

class TeachersController {
  static teachersList(req, res) {
    TeachersModel.getTeachers()
     .then(result=>{
      const data = result.rows
      res.render("teachers", {data});
     })
     .catch(err=>{
       res.render("error", {error:err})
     })
  }

  static getId(req, res) {
    TeachersModel.getTeachersId(req.params.id)
     .then(result=>{
       const data = result.rows
       res.send(data);
     })
     .catch(err=>{
       res.send('error',{error:err});
     })
  }
}

module.exports = TeachersController;
