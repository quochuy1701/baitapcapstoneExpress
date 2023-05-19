const { PrismaClient } = require('@prisma/client');
const { successCode, errorCode } = require('../ultils/response');
const prisma = new PrismaClient

const getInforimage = async (req, res) => {
    try {
        let image = await prisma.hinh_anh.findMany()
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "get fail")
    }
}
const findImage = async (req, res) => {
    try {
        let { ten_hinh } = req.body
        let image = await prisma.hinh_anh.findMany({
            where: {
                ten_hinh: {
                    contains: ten_hinh
                }
            }
        })
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "get fail")
    }

}
const findInforimage = async (req, res) => {
    try {
        let { hinh_id } = req.body
        let image = await prisma.hinh_anh.findFirst({
            include: {
                nguoi_dung: true
            },
            where: {
                hinh_id
            }

        })
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "image dont't find")
    }

}
const getInforsaveimage = async (req, res) => {
    try {
        let { hinh_id } = req.body
        let image = await prisma.luu_anh.findFirst({
            where: {
                hinh_id
            }

        })
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "get fail")
    }
}
const getImagesave = async (req, res) => {
    try {
        let { nguoi_dung_id } = req.body
        let image = await prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id
            },
            include: {
                luu_anh: true
            }

        })
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "get fail")
    }
}
const getImagecreate = async (req, res) => {
    try {
        let { nguoi_dung_id } = req.body
        let image = await prisma.hinh_anh.findMany({
            where: {
                nguoi_dung_id
            },
            include: {
                nguoi_dung: true
            }

        })
        successCode(res, "get success", image)
    } catch (error) {
        errorCode(res, "get fail")
    }
}
const deleteImagecreate = async (req, res) => {
    try {
        let { nguoi_dung_id } = req.body
        let image = await prisma.nguoi_dung.delete({
            where: {
                nguoi_dung_id
            }
        })
        successCode(res, "detele success", image)
    } catch (error) {
        console.log(error)
        errorCode(res, "delete fail")
    }
}
module.exports = {
    getInforimage,
    findImage,
    findInforimage,
    getInforsaveimage,
    getImagesave,
    getImagecreate,
    deleteImagecreate

}