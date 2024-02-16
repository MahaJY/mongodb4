const express =require('express')
const router = express.Router()
const employeecontroller = require('../controllers/empcontroller');
router.get('/',employeecontroller.getallemployees)
router.get('/id/:id',employeecontroller.getempbyid),
router.get('/city1/:city',employeecontroller.getbycity),
router.get('/city/:city',employeecontroller.getbycityquerymethod)
router.get('/role/:role',employeecontroller.getbyrolequerymethod)
router.get('/:username',employeecontroller.getbyusernamestaticmethod)
router.get('/static/:city',employeecontroller.getbycitystaticmethod)
router.get('/agefilter',employeecontroller.getemployees)
router.get('/show/:employeeid',employeecontroller.show)
router.post('/register',employeecontroller.register)
router.put('/update',employeecontroller.update)
router.delete('/delete',employeecontroller.delete1)
router.get('/by/:email',employeecontroller.findByEmail)
module.exports = router
