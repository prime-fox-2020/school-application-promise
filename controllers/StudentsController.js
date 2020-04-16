const studentsModel = require("../models/studentsModel");

class StudentsController {
  static studentsList(req, res) {
    studentsModel.getStudents()
      .then(result => {
        const data = result.rows
        res.render("students", { data });
      })
      .catch(err=>{
        res.render("error", { error: err });
      })
  }

  static addGet(req, res) {
    res.render("addStudents", {error:null});
  }

  static addPost(req, res) {
    const errors = [];
    if (!req.body.first_name) errors.push("first name tidak boleh kosong");
    if (!req.body.last_name) errors.push("last name tidak boleh kosong");
    if (!req.body.email) errors.push("email tidak boleh kosong");
    if (!req.body.gender) errors.push("gender tidak boleh kosong");
    if (!req.body.birth_date) errors.push("birth_date tidak boleh kosong");
    
    if (errors.length > 0){
      res.render('addStudents', {error: errors.join(', ')})
    } else {
      studentsModel.addPost(req.body)
        .then(()=>{
          res.redirect("/students");
        })
        .catch((error)=>{
          res.render("error", { error: err });
        })  
    }
  }

  static delete(req, res) {
    studentsModel.delete(Number(req.params.id))
      .then(()=>{
        res.redirect("/students");
      })
      .catch(err =>{
        res.render("error", { error: err });
      })
  }

  static editGet(req, res) {
    studentsModel.editGet(Number(req.params.id))
    .then(result=>{
      const data = result.rows
      res.render("editStudents", { data, error: null });
    })
     .catch(err=>{
      res.send("error", { error: err });
     })  
    }

  static editPost(req, res) {
    const errors = [];
    if (!req.body.first_name) errors.push("first name tidak boleh kosong");
    if (!req.body.last_name) errors.push("last name tidak boleh kosong");
    if (!req.body.email) errors.push("email tidak boleh kosong");
    if (!req.body.gender) errors.push("gender tidak boleh kosong");
    if (!req.body.birth_date) errors.push("birth_date tidak boleh kosong");

    if (errors.length > 0) {
      studentsModel.editGet(req.params.id)
        .then(()=>{
          res.render("editStudents", { data, error: errors.join(", ") });
        })
        .catch(err=>{
          res.render("error", { error: err });
      });
    } else {
      studentsModel.editPost(Number(req.params.id), req.body)
       .then(() =>{
         res.redirect("/students");
       })
       .catch(err=>{
        res.send("error", { error: err });
       })   
    }
  }

  static getEmail (req, res) {
    studentsModel.getEmail(req.params.email)
    .then(result=>{
      const data = result.rows
      res.send(data)
    })
    .catch(err=>{
      res.send("error", { error: err });
    }) 
  } 
}

module.exports = StudentsController;
