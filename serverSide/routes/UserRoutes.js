const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const {userLoginController , userSignupController} = require('../controllers/userController')

router.post('/login' ,jsonParser , userLoginController)

router.post('/signup' , jsonParser , userSignupController)

module.exports = router;