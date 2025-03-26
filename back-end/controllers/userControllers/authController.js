const signUp = async(req,res)=>{
    try {
        console.log("inside signup")
        console.log(req.body)
        res.status(200).json({message:"welcome home"})
    } catch (error) {
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    signUp
}