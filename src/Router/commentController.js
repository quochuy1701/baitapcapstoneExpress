const express=require('express')
const { findInforcomment, createComment } = require('../Controller/commentController')
const { privateAPI } = require('../ultils/jwt')
const commentRouter= express.Router()

commentRouter.get("/find-inforcomment",privateAPI ,findInforcomment)
commentRouter.post("/create-comment",privateAPI ,createComment)








module.exports=commentRouter