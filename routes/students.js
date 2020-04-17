const router = require("express").Router()
const ControllerStudents = require('../Controllers/students')

router.get('/', ControllerStudents.get)

router.get('/add', ControllerStudents.create)
router.post('/add', ControllerStudents.add)

router.get('/:id/delete/', ControllerStudents.destroy)

router.get('/:id/edit/', ControllerStudents.formEdit)
router.post('/:id/edit/', ControllerStudents.update)

router.get('/:email', ControllerStudents.getEmail)

//#region END GET
//#endregion END POST

module.exports = router