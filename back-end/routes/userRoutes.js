const express = require('express')
const authController = require("../controllers/userControllers/authController")
const editController = require('../controllers/userControllers/editController')

const router = express.Router()

router.post('/login',authController.login)
router.post('/signup',authController.signUp)

router.put('/editUser',editController.edit)

module.exports = router