const express = require('express')
const SubjectsController = require('../controllers/SubjectsController')

const router = express.Router()

//ini routing untuk localhost:3000/Subjects/
router.get('/', SubjectsController.subjectsList)




module.exports = router