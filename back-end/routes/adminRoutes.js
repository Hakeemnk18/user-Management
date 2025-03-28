const express = require('express')
const adminController = require("../controllers/adminControllers/adminController")

const router = express.Router()

router.get('/',adminController.getUsers)

module.exports = router