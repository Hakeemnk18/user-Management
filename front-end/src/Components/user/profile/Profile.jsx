import React from 'react'
import { Facebook, Instagram, Pencil, Twitter, Sparkles} from "lucide-react"
import GradientIcon from '../icon/GradientIcon'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user = useSelector((store) => store.user.user)
  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-950 to-gray-900 text-gray-100 p-6 pt-25 flex justify-center items-center">
        <div className="w-[700px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-lg flex flex-col md:flex-row border-gray-700 ">
      {/* Left sidebar with gradient background */}
      <div className="bg-gradient-to-tl from-indigo-950 to-blue-600 text-white text-center flex flex-col items-center justify-center md:w-2/5 h-full">
        <div className="relative">
          <div className="w-24 h-24 bg-sky-200 rounded-full mx-auto mb-4 flex items-center justify-center">
            <img src="/placeholder.svg?height=96&width=96" alt="User avatar" className="w-20 h-20 rounded-full" />
            <div className="absolute top-0 right-0 bg-gray-500 p-2 rounded-full">
              
              <Pencil size={10}/>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-2 ">{user.name}</h2>
        <p className="text-sm mt-1 mb-6">Web Designer</p>
        
        <button className="p-2 flex items-center justify-center space-x-2 cursor-pointer rounded-lg">
            <span className="flex items-center space-x-2">
                <GradientIcon />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500 font-semibold">
                Use Avatar
                </span>
            </span>
        </button>
      </div>

      {/* Right content area */}
      <div className="bg-gray-800  p-20 md:w-3/5 h-full pt-22 ">
        

        <div className="grid grid-cols-2 gap-25 mb-6">
          <div>
            <p className="text-gray-500 font-medium">Email</p>
            <p className="text-gray-200 text-sm">{user.email}</p>
          </div>
          <div>
            
          </div>
        </div>

        

        <div className="grid grid-cols-2 gap-25 mb-6">
          <div>
          <p className="text-gray-500 font-medium">Phone</p>
          <p className="text-gray-200 text-sm">9825254620</p>
          </div>
          <div>
            
          </div>
        </div>
        <div className='flex  mt-[150px] ml-[220px]'>
            <div className="flex space-x-4 ">
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
    </div>
    </div>
  )
}

export default Profile
