const pool = require('../sinyal');


class Model {
	static getStudents () {
			return this.openFile ()
	}

	static studentPost (newStudent) {
			return this.writeFile(newStudent)
	}

	static editStudents (data) {
			return pool.query(`SELECT first_name, last_name, email FROM murid
			WHERE id = ${data}`)
	}

	static postEditStudents (id, firstname, lastname, email) {
		console.log(firstname)
			if (firstname.length < 1 || lastname.length < 1 || email.length < 1) {
				
					callback('Edit data failed, data invalid', null)
			} else {
					for (let i = 0; i < email.length; i++) {
						console.log(email)
							if (email[i] == '@') {
									return pool.query(`UPDATE murid 
									SET first_name = '${firstname}', last_name = '${lastname}', email = '${email}'
									WHERE id = ${id}`)
							}
					}
			}
	}

	static getEmail (req) {
			return pool.query(`SELECT * FROM murid WHERE email = '${req}'`)
	}

	static openFile () {
			return new Promise((res, rej) => {
					pool.query(`SELECT * FROM murid`)
					.then(data => {
							let dob;
							for (let i = 0; i < data.rows.length; i++) {
									dob = JSON.stringify(data.rows[i].birth_date)
									dob = dob.split('T')
									let str = ''
									for (let j = 1; j < dob[0].length; j++) {
											str += dob[0][j]
									}
									data.rows[i].birth_date = str;
							}
							res(data.rows)
					})
					.catch(err => {
							rej(err);
					})
			})
	}

	static writeFile (data) {
			let dob = data.birth_date.split('-')
			if (dob.length < 3 || data.firstname.length < 1 || data.lastname.length < 1 || data.email.length < 1 || data.gender.length < 1) {
					console.log('Data invalid')
			} else {
					for (let i = 0; i < data.email.length; i++) {
							if (data.email[i] == '@' && data.email.split('.').length >= 2) {
									return pool.query(`
											INSERT INTO murid (first_name, last_name, email, gender, birth_date)
											VALUES ('${data.firstname}', '${data.lastname}', '${data.email}', '${data.gender}', '${data.birth_date}')
											`
									)
							}
					}
			}
	}

	static deleteStudent (id) {
			return pool.query(`DELETE FROM murid WHERE id = ${id}`)
	}
}

module.exports = Model;
