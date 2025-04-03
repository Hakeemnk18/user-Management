const User = require('../../model/User')
const axios = require('axios')
const env = require('dotenv').config()


const imageUrls = [
    "http://localhost:5000/uploads/untitled-design-2.png",
    "http://localhost:5000/uploads/untitled-design-1.png"
];

const getImageUrl = ()=>{
    const randomNumber = Math.floor(Math.random() * 2);
    return imageUrls[randomNumber]
}
const edit = async(req,res) => {
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
        console.log("error in edit user "+error.message)
        res.status(404).json({message:"error in server"})
    }
}

const uploadImage = async(req,res)=>{
    try {
        
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



const createImage = async(req,res)=>{
    try {
        
        
        
        //const image = response.data.output[0]

        // const API_URL = "https://modelslab.com/api/v6/realtime/text2img";
        // const data = {
        //     key: process.env.MODEL_LAB_API_KEY,
        //     prompt: "Generate a high-quality AI user avatar, professional, single person, neutral background, centered composition, studio lighting, sharp details, realistic skin texture, natural facial expression",
        //     negative_prompt: "poor quality, multiple people, extra faces, distorted features, blurry, low-resolution, unrealistic, asymmetry, exaggerated expressions, watermark, text, artifacts, low detail, noise",
        //     width: "512",
        //     height: "512",
        //     samples: "1",
        //     safety_checker: false,
        //     seed: null,
        //     instant_response: false,
        //     base64: false,
        //     webhook: null,
        //     track_id: null,
        //     enhance_prompt: true,
        //     enhance_style: "cinematic-diva"
        // };
        // JSON.stringify(data)
        // const response = await axios.post(API_URL, data);
        
        // const image = response.data.output[0]

        
        //const image = "https://cdn-icons-png.freepik.com/512/147/147144.png"
        //const image = "http://localhost:5000/uploads/untitled-design-2.png"
        const image = getImageUrl()
        
        setTimeout(() => {
            res.status(200).json({ image });
        }, 2000);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: "API request failed" });
    }
}


module.exports = {
    edit,
    uploadImage,
    createImage
}