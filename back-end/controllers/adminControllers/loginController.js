const User = require('../../model/User')
const jwt = require('jsonwebtoken')
const env = require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET
const login = async(req,res) => {
    try {

        const {email , password} = req.body
        const user = await User.findOne({email})
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = password === user.password
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }

        if(user.role !== 'admin'){
            return res.status(401).json({ message: 'Access denied' });
        }

        const token = jwt.sign(
            { id: user._id, name: user.name, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' } 
        );

        res.status(200).json({
            message:"login success",
            token,
            user
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    login
}