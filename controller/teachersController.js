const Model = require('../model/teachersModel');

class TeacherController {
	static getById(req, res) {
		// Model.getbyId(req.params.id, (err, data) => {
			
		// 	if (err) {
		// 		res.send(err);
		// 	} else {
		// 		res.render('teachers.ejs', { data });
		// 	}
		// });

		Model.getbyId(req.params.id)
		.then(result=>{
			console.log(result)
			res.render('teachers.ejs', {data: result.rows})
		})
		.catch(err=>{
			res.send(err)
		})
	}

	static showTeacher(req, res) {
		// Model.showTeacher((err, data) => {
		// 	if (err) {
		// 		res.send(err, null);
		// 	} else {
				
		// 		res.render('teachers.ejs', { data });
		// 	}
		// });

		Model.showTeacher(req.params.id)
		.then(result=>{
			console.log(result)
			res.render('teachers.ejs', {data: result.rows})
		})
		.catch(err=>{
			res.send(err)
		})
	}
}

module.exports = TeacherController;
