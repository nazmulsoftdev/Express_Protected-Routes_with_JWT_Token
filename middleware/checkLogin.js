const jwt = require("jsonwebtoken");

const CheckLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SCRET_JWT_SIGNATURE);
        const { userId, userName } = decoded;
        req.userId = userId;
        req.userName = userName;
        next();
    } catch (err) {
        console.log(err);
        next("Authentication Failure !");
    }
};

module.exports = CheckLogin;