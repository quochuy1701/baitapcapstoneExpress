const express=require('express')
const imageRouter= express.Router()
const {getInforimage, findImage, findInforimage, getInforsaveimage, getImagesave, getImagecreate, deleteImagecreate} = require('../Controller/imageController')
const { privateAPI } = require('../ultils/jwt')
imageRouter.get("/get-image" ,getInforimage)

imageRouter.get("/find-image" ,privateAPI,findImage)
imageRouter.get("/find-inforimage",privateAPI ,findInforimage)
imageRouter.get("/get-inforsaveimage", privateAPI,getInforsaveimage)
imageRouter.get("/get-imagesave",privateAPI ,getImagesave)
imageRouter.get("/get-imagecreate",privateAPI ,getImagecreate)
imageRouter.delete("/detele-imagecreate",privateAPI ,deleteImagecreate)












module.exports=imageRouter