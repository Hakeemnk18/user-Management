const express = require('express')
const adminController = require("../controllers/adminControllers/adminController")
const loginController = require('../controllers/adminControllers/loginController')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/authMiddleWare')
const router = express.Router()

router.post('/',loginController.login)
router.get('/dashboard',adminAuth,adminController.getUsers)
router.put('/editUser',adminAuth,adminController.editUser)
router.delete('/deleteUser',adminAuth,adminController.deleteUser)
router.post('/createUser',adminAuth,adminController.createUser)

module.exports = router