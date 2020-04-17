const Model = require('../model/subjectsModel');

class SubjectsController {
	static getById(req, res) {
		// Model.getbyId(req.params.id, (err, data) => {
			
		// 	if (err) {
		// 		res.send(err);
		// 	} else {
		// 		console.log(data)
		// 		res.render('subjects.ejs', { data });
		// 	}
		// });
		Model.getbyId(req.params.id)
		.then(result=>{
			console.log(result)
			res.render('subjects.ejs', {data: result.rows})
		})
		.catch(err=>{
			res.send(err)
		})
	}

	static showSubject(req, res) {
		Model.showSubject()
		.then(result=>{
			res.render('subjects.ejs', {data: result.rows})
		})
		      .catch(err => {
			res.send(err)
	})        
	}
}

module.exports = SubjectsController;
