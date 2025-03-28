const express = require('express')
const adminController = require("../controllers/adminControllers/adminController")
const auth = require('../middleware/authMiddleWare')

const router = express.Router()

router.get('/',adminController.getUsers)
router.put('/editUser',auth,adminController.editUser)

module.exports = router