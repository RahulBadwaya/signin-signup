const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const {userLoginController , userSignupController, userData} = require('../controllers/userController')

router.post('/login' ,jsonParser , userLoginController)

router.post('/signup' , jsonParser , userSignupController)

router.get('/user/:_id' ,jsonParser, userData)

module.exports = router;