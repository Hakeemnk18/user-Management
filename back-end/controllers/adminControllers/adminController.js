const User = require('../../model/User')
const mongoose = require('mongoose')

const getUsers = async(req,res)=>{
    try {
        
        const users = await User.find()
        
        res.status(200).json({users:users})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

const editUser = async(req,res)=>{
    try {
        
        const {_id,name,email} = req.body
        
        const updateUser = await User.findByIdAndUpdate(
            _id, 
            { 
              $set: { name: name, email: email } 
            },
            { new: true }
        );

        if(!updateUser){
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json({user:updateUser})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

const deleteUser = async (req,res) =>{
    try {
        
        const { _id } = req.body

        const user = await User.findById(_id)
        
        const data = await User.findByIdAndDelete(_id)
        
        if(!data){
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ok:true, user:data})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

const createUser = async(req,res) => {
    try {
        console.log("inside admin create user")
        console.log(req.body)
        const {name,email,password} = req.body
        const existingUser = await User.findOne({email:email})
        if(existingUser){
            return res.status(409).json({ message: 'User already exist' });
        }
        const user = new User({
            name:name,
            email:email,
            password:password,
            role:'user'
        })
        const cUser = await user.save()
        console.log(cUser)
        res.status(200).json({message:"user created"})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    getUsers,
    editUser,
    deleteUser,
    createUser
}