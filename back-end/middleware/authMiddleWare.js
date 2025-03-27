const jwt = require('jsonwebtoken')
const env = require("dotenv").config()
const JWT_SECRET = process.env.JWT_SECRET

const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized access!' });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ message: 'Invalid token!' });
    }
}

module.exports = auth