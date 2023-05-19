const { PrismaClient } = require('@prisma/client');
const { successCode, errorCode } = require('../ultils/response');
const prisma = new PrismaClient


const findInforcomment = async (req, res) => {
    try {
        let {hinh_id} =req.body
        let comment = await prisma.binh_luan.findFirst({
            where:{
                hinh_id
            }
    
        })
        successCode(res,"get success",comment)
    } catch (error) {
        errorCode(res,"find fail")
    }
  
 }
 const createComment = async (req, res) => {
    try {
        let {nguoi_dung_id,hinh_id,noi_dung} = req.body
        let newData ={
            nguoi_dung_id,
            hinh_id,
            noi_dung
        }
        let comment = await prisma.binh_luan.create({data : newData
        })
        successCode(res,"get success",comment)
    } catch (error) {
        errorCode(res,"create fail")
        
    }
   
 }
 module.exports = {
   
    findInforcomment,
    createComment
     
 }