const User = require('../../model/User')
const edit = async(req,res) => {
    try {
        console.log("inside edit user")
        console.log(req.body)
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
        console.log("error in edit user "+error.message)
        res.status(404).json({message:"error in server"})
    }
}

const uploadImage = async(req,res)=>{
    try {
        console.log("inside image upload")
        console.log(req.body)
        const { _id, imageUrl} = req.body

        const updateImage = await User.findByIdAndUpdate(
            _id,
            {
                $set : { imgURL: imageUrl }
            },
            { new: true}
        )
        if(!updateImage){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"image upload successfully"})
    } catch (error) {
        console.log("error in image upload "+error.message)
        res.status(404).json({message:"error in server"})
    }
}

module.exports = {
    edit,
    uploadImage
}