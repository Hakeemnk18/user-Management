const User = require('../../model/User')
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
        console.log("user saved")
        console.log(data)
        res.status(200).json({ok:true,...data})
    } catch (error) {
        console.log("error in signUp "+error.message)
        res.status(404).json({message:"error in server"})
    }
}

const login = async(req,res)=>{
    try {
        console.log("inside login")
        console.log(req.body)
        res.status(200).json({message:"welcome home"})
    } catch (error) {
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    signUp,
    login
}