import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../../store/slices/userSlice';

const UseAvatar = ({onCancel}) => {
    const [avatars, setAvatars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [isCreateAvatarLoading, setIsCreateAvatarLoading] = useState(false)
    const [imageUrl,setImageUrl] = useState()
    const user = useSelector((store)=> store.user.user)
    const dispatch = useDispatch()
    const generateAvatars = async () => {
        try {
            setIsCreateAvatarLoading(true)
          const response = await axios.get('/api/generate-avatars')
           
           setImageUrl(response.data.image)
           setIsCreateAvatarLoading(false)
           setLoading(false);  // Store generated avatars
          toast.success("image create successfully")
        } catch (error) {
          console.error("Avatar generation failed:", error);
          toast.error('Avatar generation failed')
          
        }
    };
    const handleAvatar = async()=>{
        try {
            const imageObj = {
                imageUrl:imageUrl,
                _id:user._id
            }
            
            const res = await axios.post('/api/imageUpload',imageObj)
            dispatch(addUser({...user,imgURL:imageObj.imageUrl}))
            toast.success("Image uploaded successfully!")
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'An error occurred');
            } else {  
                toast.error('Something went wrong. Please try again.');
            }
        }
    }
  return (
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-[400px] flex flex-col items-center">
      
      {/* Profile Preview */}
      <div className="relative w-32 h-32 mb-6 border-4 border-gray-300 rounded-full overflow-hidden">
        {
           loading ? 
           
           <>
           {/* Centered Loading Animation & Text */}
           {
            isCreateAvatarLoading && 
            <div className="bg-black absolute inset-0  flex flex-col items-center justify-center">
               <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-2"></div>
               <p className="text-xs font-semibold text-gray-300">Create AI Avatar</p>
           </div>
           }
           
           {/* Default Avatar Image */}
           <img
               src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
               alt="Selected Avatar"
               className="w-full h-full object-cover opacity-50"
           />
       </>
            :
           <img 
           src={imageUrl}
           alt="Selected Avatar"
           className="w-full h-full object-cover"
           />
        }
        
      </div>

      {/* Title */}
      {/* Use Avatar Button */}
      {
        loading ? 
        <button 
        onClick={generateAvatars}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg mb-4 disabled:opacity-50"
        
      >
        Create Avatar
      </button>  :
      <button 
        onClick={handleAvatar}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg mb-4 disabled:opacity-50"
        
        >
        Use Avatar
       </button>
      }
      

      {/* Close Button */}
      <button 
      onClick={onCancel} 
      className="text-gray-600 underline cursor-pointer">
        
        Close
      </button>

    </div>
  </div>
  )
}

export default UseAvatar
