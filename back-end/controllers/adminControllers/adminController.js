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
        console.log("inside edit user")
        const {_id,name,email} = req.body
        console.log(req.body)
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
        console.log("user updated")
        res.status(200).json({user:updateUser})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

const deleteUser = async (req,res) =>{
    try {
        console.log("inside delete")
        const { id } = req.body
        console.log(req.body)
        const users = await User.find({_id:id})
        console.log(users)
        const data = await User.findByIdAndDelete(id)

        if(!data){
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ok:true, user:data})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    getUsers,
    editUser,
    deleteUser
}