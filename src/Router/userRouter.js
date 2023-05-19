const express=require('express')
const userRouter= express.Router()
const {signUpUser, loginUser, getInforuser} = require('../Controller/userController')
const { privateAPI } = require('../ultils/jwt')
userRouter.post("/signup" ,signUpUser)
userRouter.post("/login",loginUser)
userRouter.get('/get-inforuser',privateAPI , getInforuser)





module.exports=userRouter