const User = require('../models/model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const jwtKey = "r-ecommerce"
mongoose.connect(`mongodb://localhost:27017/ecommerce`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const userLoginController = (req , res)=>{
     const {email , pass} = req.body
     User.findOne({email:email} , (err , user)=>{
         if(user){
             jwt.sign({user} , jwtKey ,{expiresIn:"3h"} ,(err , token)=>{
                 if(pass === user.pass){
                     res.send({message:"Login successfully" , user:user ,auth: token} )
                 }else{
                     res.send({message:"password does not matched"})
                 }

             })
         }else{
             res.send({message:"User Does Not Registered"})
         }
     })
}

const userSignupController = (req , res)=>{
 const {name , email , pass } = req.body
 User.findOne({email:email},(err , user)=>{
     if(user){
         res.send({message:"user already resistered"})
     }else{
         let data = new User({
             _id:mongoose.Types.ObjectId(),
             name:req.body.name,
             email:req.body.email,
             pass:req.body.pass
         })

         data.save((err,result)=>{
             if(err){
                 res.send(err)
             }
             else{
                 jwt.sign({user} , jwtKey , {expiresIn:"3h"} ,(err , token)=>{
                     res.send({message:"User Resistered Successfully! " , user:result,  auth:token})
                 })
             }
         })
     }
 })
}

module.exports = {
    userLoginController,
    userSignupController
}