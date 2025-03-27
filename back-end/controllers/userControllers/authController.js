const User = require('../../model/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('dotenv').config()


const JWT_SECRET = process.env.JWT_SECRET
const signUp = async(req,res)=>{
    try {
        console.log("inside signup")
        console.log(req.body)
        const {name,password,email} = req.body

        const user = new User({
            name:name,
            password:password,
            email:email
        })
        const data = await user.save()
        
        const token = jwt.sign(
            { id: data._id, name: data.name, role: data.role },
            JWT_SECRET,
            { expiresIn: '1h' } 
        );
        console.log("user saved")
        console.log(data)
        res.status(200).json({
            ok: true,
            token,
            name: data.name,
            _id: data._id,
            role: data.role,
        })
    } catch (error) {
        console.log("error in signUp "+error.message)
        res.status(404).json({message:"error in server"})
    }
}

const login = async(req,res)=>{
    try {
        console.log("inside login")
        const {email , password} = req.body
        console.log(req.body)
        const user = await User.findOne({email})

        if (!user) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      
        
        const isMatch = password === user.password
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid email or password' });
        }
      
        
        const token = jwt.sign(
          { id: user._id, name: user.name, role: user.role },
          JWT_SECRET,
          { expiresIn: '1h' } 
        );
        console.log("token ",token)

        res.status(200).json({
            ok: true,
            token,
            name: user.name,
            _id: user._id,
            role: user.role,

        })
    } catch (error) {
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    signUp,
    login
}