const studentsModel = require('../model/studentsModel');

class Controller {
	


    static showStudents (req, res) {
        studentsModel.getStudents()
        .then(data => {
            res.render('students.ejs', {data})
        })
        .catch (err => {
            res.send(err)
        })
    }

    static addStudent (req, res) {
        res.render('studentsAdd.ejs')
    }

    static postStudent (req, res) {
        studentsModel.studentPost(req.body)
        .then (data => {
            res.redirect('/students')
        })
        .catch (err => {
            res.send(err)
        })
    }

    static getEditStudent (req, res) {
        studentsModel.editStudents(req.params.id)
        .then (data => {
            res.render('studentsEdit.ejs', {
                paramId : req.params.id,
                populatedStudent : data.rows
            })
        })
        .catch (err => {
            res.send(err)
        })
    }

    static postEditStudent (req, res) {
        let id = req.params.id;
        let first_name = req.body.firstname;
        let last_name = req.body.lastname;
				let email = req.body.email;
				
				studentsModel.postEditStudents(req.params.id, req.body.first_name, req.body.last_name, req.body.email)
			
				
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteStudent (req, res) {
        studentsModel.deleteStudent(req.params.id)
        .then(data => {
            res.redirect('/students')
        })
        .catch(err => {
            res.send('Unable to delete data')
        })
    }

    static emailStudentGet (req, res) {
        studentsModel.getEmail(req.params.email)
        .then(data => {
            res.render('students.ejs', {data : data.rows})
        })
        .catch(err => {
            res.send(err)
        })
    }

}

module.exports = Controller;
