const {Router} = require('express')
const router = Router()
const ControllerSubjects = require('../controllers/subjects')

router.get('/', ControllerSubjects.get)

router.get('/:id', ControllerSubjects.getId)


module.exports = router