const express = require('express')
const adminController = require("../controllers/adminControllers/adminController")
const loginController = require('../controllers/adminControllers/loginController')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/authMiddleWare')
const router = express.Router()

router.post('/',loginController.login)
router.get('/dashboard',adminAuth,adminController.getUsers)
router.put('/editUser',adminController.editUser)
router.delete('/deleteUser',adminController.deleteUser)
router.post('/createUser',adminController.createUser)

module.exports = router