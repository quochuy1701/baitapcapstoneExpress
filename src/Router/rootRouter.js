const express = require('express')
const rootRouter = express.Router();
const userRouter = require("./userRouter")
const imageRouter =require("./imageRouter");
const commentRouter = require('./commentController');
rootRouter.use('/user',userRouter)
rootRouter.use('/image',imageRouter)
rootRouter.use('/comment',commentRouter)
module.exports=rootRouter