const User = require('../../model/User')
const getUsers = async(req,res)=>{
    try {
        console.log("inside get user admin")
        const users = await User.find({role:'user'})
        res.status(200).json({users:users})
    } catch (error) {
        console.log(error.message)
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    getUsers
}