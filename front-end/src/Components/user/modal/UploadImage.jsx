import React, { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
const CLOUDINARY_URL = import.meta.env.VITE_API_CLOUDINARY_URL;
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../../store/slices/userSlice';

const UploadImage = ({onCancel}) => {
    const [image,setImage] = useState()
    const user = useSelector((store)=> store.user.user)
    const dispatch = useDispatch()
    const handleUpload = async ()=> {

        if(!image){
            toast.error("select an image")
            return
        }
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "olx-clone");
        try {
            const response = await axios.post(
              CLOUDINARY_URL,
              formData
            );
            const imageObj = {
                imageUrl:response.data.secure_url,
                _id:user._id
            }
            const token = localStorage.getItem('userToken')
            const res = await axios.post('/api/imageUpload',imageObj,{
              headers:{
                Authorization: `Bearer ${token}`,
              }
            })
            dispatch(addUser({...user,imgURL:imageObj.imageUrl}))
            toast.success("Image uploaded successfully!")
            
        } catch (error) {
            console.error("Upload error:", error);
            if (error.response) {
                toast.error(error.response.data.message || 'An error occurred');
            } else {  
                toast.error('Something went wrong. Please try again.');
            }
            
        }
    }
  return (
    <div className="bg-black/50 absolute inset-0 flex items-center justify-center">
         <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                  
         
         <div className="flex justify-center">
            <label className="bg-gray-200 p-2 px-10 mb-4 rounded-lg  cursor-pointer text-black shadow-lg">
                Select an Image
                <input type="file" className="hidden" onChange={(e)=> setImage(e.target.files[0])}/>
            </label>
         </div>
                  
            <div className="flex justify-center space-x-3">
                    <button
                      onClick={onCancel}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"

                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpload}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Submit
                </button>
            </div>
         </div>
    </div>
  )
}

export default UploadImage
