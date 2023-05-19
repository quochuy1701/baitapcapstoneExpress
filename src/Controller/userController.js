const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { failCode, successCode, errorCode } = require('../ultils/response');
const prisma = new PrismaClient(); // tương tự initModel của sequelize
const signUpUser = async (req, res) => {
    try {
        let { ho_ten, email, mat_khau} = req.body;
       
        let newData = {
            ho_ten	,
            email ,
            mat_khau: bcrypt.hashSync( mat_khau, 8) // mã hóa
        }
        let checkEmail = await prisma.nguoi_dung.findFirst({
            where: {
                email
            }
        })
        if (checkEmail) {
            failCode(res, "Email đã tồn tại", "");
            return;
        }
        await prisma.nguoi_dung.create({data: newData });
        successCode(res, "sign up success", "");

    } catch (err) {
       
        
        errorCode(res, "sign up fail");

    }
}
const {generateToken} =require('../ultils/jwt')
const loginUser = async (req, res) => {
    
    let { email, mat_khau } = req.body;

 
    let checkUser = await prisma.nguoi_dung.findFirst({
        where: {
            email
        }
    })
   
    
    if (checkUser) {
        let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);
        if (checkPass == true) {
            
            let token = generateToken(checkUser);
            successCode(res, token, "");
        } else {
            failCode(res, "pass word not found !", "");
        }
    } else {
   
        failCode(res, "email not found !", "");
    }

}
const getInforuser = async (req, res) => {
    try {
        let { nguoi_dung_id} = req.body;

 
        let user = await prisma.nguoi_dung.findFirst({
            where: {
                nguoi_dung_id
            }
        })
        successCode(res,"get success",user)
    } catch (error) {
        errorCode(res,"user don't find")
    }
   
   
    
    

}
module.exports = {
   
    signUpUser,
    loginUser,
    getInforuser
  
}