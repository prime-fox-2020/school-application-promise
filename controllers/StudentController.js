let Model = require('../models/studentsModel')
class StudentController {
    static getStudent(req,res){
        Model.readStudent()
        .then(data =>{
            res.render('../views/students.ejs', {data: data.rows, email: undefined})
        })
        .catch(err =>{
            res.send(err)
        })
    }
    
    static getStudentEmail(req,res){
        Model.readStudent()
        .then(data =>{
            res.render('../views/students.ejs', {data: data, email: req.params.email})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addStudent(req,res){
        res.render('../views/addStudent.ejs')
    }

    static editStudent(req,res){
        Model.readStudentId(req.params.id, (err,data)=>{
            if(err) console.log(err)

            res.render('../views/editStudent.ejs', {data: data})
        })
    }

    static deleteStudent(req,res){
        Model.deleteStudent(req.params.id)
        .then(data =>{
            console.log('berhasil ngapus')
            res.redirect('/students')
        })
        .catch( err=>{
            res.send(err)
        })
    }

    static addStudentPost(req,res){
        let fname = req.body.fname
        let lname = req.body.lname
        let email = req.body.email
        let gender = req.body.gender
        let birthDate = req.body.birthdate
        Model.addStudent(fname, lname, email, gender, birthDate)
        .then(data=>{
            res.redirect('/students')
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static editStudentPost(req,res){
        let id = req.params.id
        let fname = req.body.fname
        let lname = req.body.lname
        let email = req.body.email
        let gender = req.body.gender
        let birthDate = req.body.birthdate
        Model.editStudent(id, fname, lname, email, gender, birthDate)
        .then( data =>{
            console.log(`Successfully editing student with id ${id}`)
            res.redirect('/students')
        })
        .catch( err=>{
            console.log(err)
        })
    }
}
module.exports = StudentController