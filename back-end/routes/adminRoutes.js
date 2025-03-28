const express = require('express')
const adminController = require("../controllers/adminControllers/adminController")
const loginController = require('../controllers/adminControllers/loginController')
const auth = require('../middleware/authMiddleWare')

const router = express.Router()

router.post('/',loginController.login)
router.put('/editUser',auth,adminController.editUser)
router.delete('/deleteUser',adminController.deleteUser)

module.exports = router