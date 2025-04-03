import React, { useState } from 'react'
import { Facebook, Instagram, Pencil, Twitter, Sparkles } from "lucide-react"
import GradientIcon from '../icon/GradientIcon'
import { useSelector } from 'react-redux'
import EditUserModal from '../modal/EditUserModal'
import UploadImage from '../modal/UploadImage'
import UseAvatar from '../modal/UseAvatar'
import ChatModal from '../chatModal/ChatModal'

const Profile = () => {
    const user = useSelector((store) => store.user.user)
    
    const [isEditForm,setIsEditForm] = useState(false)
    const [isImageModal,setIsImageModal] = useState(false)
    const [isUseAvatar,setIsUseAvatar] = useState(false)
    
    return (
        <div className="min-h-screen bg-gradient-to-tl from-indigo-950 to-gray-900 text-gray-100 p-6 pt-25 flex justify-center items-center">
            <div className="w-[700px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-lg flex flex-col md:flex-row border-gray-700 ">
                {/* Left sidebar with gradient background */}
                <div className="bg-gradient-to-tl from-indigo-950 to-blue-600 text-white text-center flex flex-col items-center justify-center md:w-2/5 h-full">
                    <div className="relative">
                        <div className="w-31 h-31  rounded-full mx-auto mb-4 flex items-center justify-center">
                            <img 
                            src={user?.imgURL ? user.imgURL :
                                "https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                            } 
                            className="w-30 h-30 rounded-full" />
                            <div className="absolute top-0 right-0 bg-gray-500 p-2 rounded-full" onClick={()=> setIsImageModal(true)}>

                                <Pencil size={10} />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold mt-2 ">{user.name}</h2>
                    <p className="text-sm mt-1 mb-6">Web Designer</p>

                    <button className="p-2 flex items-center justify-center space-x-2 cursor-pointer rounded-lg">
                        <span className="flex items-center space-x-2">
                            <GradientIcon />
                            <span 
                            onClick={()=> setIsUseAvatar(true)}
                            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 font-semibold">
                                Use Avatar
                            </span>
                        </span>
                    </button>
                </div>

                {/* Right content area */}

                <div className="bg-gray-800 md:w-3/5 h-full  flex flex-col justify-between">
                        {/* Edit User Button */}
                        <div className='flex justify-end pt-4 pr-4'>
                            <button 
                            onClick={()=> setIsEditForm(true)}
                            className='bg-green-700 text-white px-6 py-2 rounded hover:bg-green-400 transition-colors cursor-pointer'>Edit user</button>
                        </div>

                        {/* User Information */}
                        <div className="flex flex-col justify-center items-start pl-22 ">
                            <div className="mb-6 ">
                                <div >
                                    <p className="text-gray-500 font-medium">Email</p>
                                    <p className="text-gray-200 text-sm">{user.email}</p>
                                </div>
                                
                            </div>

                            <div className=" mb-6 ">
                                <div>
                                    <p className="text-gray-500 font-medium">Phone</p>
                                    <p className="text-gray-200 text-sm">9825254620</p>
                                </div>
                                
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className='flex justify-end mb-4 pb-4 pr-4'>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-500">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="text-blue-400">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="text-pink-500">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                </div>
                <ChatModal />
            </div>
            {/* edit form modal */}
            {
                isEditForm &&
                <EditUserModal 
                onCancel={()=> setIsEditForm(false)}
                
            />
            }
            {/* image modal */}
            {
                isImageModal && 
                <UploadImage 
                onCancel={()=> setIsImageModal(false)}
                />
            }
            {/* use avatar modal */}
            {
                isUseAvatar &&
                <UseAvatar 
                 onCancel={()=> setIsUseAvatar(false)}
                />
            }
            
        </div>
    )
}

export default Profile
