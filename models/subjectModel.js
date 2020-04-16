const pool = require('../connection')

class SubjectModel {
    static getSubject() {
        return this.openFile()
    }

    static openFile () {
        return pool.query(`SELECT * FROM subject`)
    }
}

module.exports = SubjectModel;