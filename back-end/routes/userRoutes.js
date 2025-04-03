const express = require('express')
const authController = require("../controllers/userControllers/authController")
const editController = require('../controllers/userControllers/editController')
const userAuth = require('../middleware/authMiddleWare')
const router = express.Router()

router.post('/login',authController.login)
router.post('/signup',authController.signUp)

router.put('/editUser',userAuth,editController.edit)
router.post('/imageUpload',userAuth,editController.uploadImage)
router.get('/generate-avatars',userAuth,editController.createImage)

module.exports = router