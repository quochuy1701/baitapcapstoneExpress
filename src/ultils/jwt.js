const jwt = require('jsonwebtoken');
const { successCode, errorCode } = require('./response');

// tạo token
const generateToken = (data) => {

    // data: string, number, object, buffer => ko có tham số thứ 3, nếu có thì ko dc truyền string

    let token = jwt.sign(data, "node-30", { algorithm: "HS256", expiresIn: "5m" });


    return token;
}

const checkToken = (token) => {
    jwt.verify(token, "node-30");
}


const privateAPI = (req, res, next) => {

    
    try {
        // kiểm tra token
        let { token } = req.headers;

        checkToken(token);
        next();
    } catch (err) {
        errorCode(res,"token hết hạn")
       
    }

}


// giải mã token
const decodeToken = () => {

}

module.exports = {
    generateToken,
    checkToken,
    decodeToken,
    privateAPI
}