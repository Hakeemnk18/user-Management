import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"
import { Search, Upload, Layers, Settings2, Plus, ChevronDown } from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify";



export default function UsersTable() {
  const [users,setUsers] = useState([])
  const [isModal,setIsModal] = useState(false)
  const [selectedUser,setSelectedUser] = useState({
    name:'',
    email:''
  })

  const fetchUser = async()=>{

    try {
      const token = localStorage.getItem('adminToken')
      const response = await axios.get('/api/admin/dashboard',{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
      setUsers(response.data.users)
    } catch (error) {
      
    }
  } 

  const handleModal = (user) => {
    if(!isModal){
      setIsModal(true)
      setSelectedUser(user)
    }
    return
  }

  const handleEdit = async(e) => {

    try {
      e.preventDefault()
      const token = localStorage.getItem('adminToken')
      const response =await axios.put('/api/admin/editUser',selectedUser,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      })
      setIsModal(false)
      let updateUser = response.data.user
      console.log("update user ",updateUser)
      const filter = users.map((use)=>{
        return use._id === updateUser._id ? updateUser : use
      })
      setUsers(filter)
      toast.success("user updated")
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-950 to-gray-900 text-gray-100 p-6 pt-25">
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-white">All Users</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Upload className="h-4 w-4 mr-1" />
            <span>Import</span>
          </button>
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Layers className="h-4 w-4 mr-1" />
            <span>Segments</span>
          </button>
          <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <Settings2 className="h-4 w-4 mr-1" />
            <span>Table settings</span>
          </button>
        </div>
      </div>
    
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <button className="flex items-center justify-between w-48 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300">
            <span>All users</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </button>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Quick search..."
            className="block w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="flex items-center px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 hover:bg-gray-700 transition-colors">
          <Plus className="h-4 w-4 mr-1" />
          <span>Add filters</span>
        </button>
      </div>
    
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        
        <div className="divide-y divide-gray-700">
          {users.map((user) => (
            <div
              key={user.id}
              className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-6 py-4 items-center hover:bg-gray-750"
            >
             

             <div className="flex items-center space-x-3 w-full">
                <img
                  src={user.avatar || "/placeholder.svg"}
                  alt={`${user.name}'s avatar`}
                  className="w-10 h-10 rounded-full mr-3 bg-gray-700 "
                />
                <div className="">
                  <div className="font-medium text-white mr-3">{user.name}</div>
                  
                </div>
                <div className="text-gray-300 self-center ">{user.email}</div>
              </div>
              
              <div className="text-gray-300 text-right"
                onClick={() => handleModal(user)}
              >
              <FontAwesomeIcon icon={faEdit} className="text-blue-500 cursor-pointer" />
              </div>
              <div className="text-gray-300 text-right">
              <FontAwesomeIcon icon={faTrash} className="text-blue-500 cursor-pointer" />
              </div>

              {/* modal */}
              {
                isModal && 
                <div className="w-[280px] bg-white p-4 shadow-lg rounded-lg absolute bottom-80 right-40">
  
                <button
                  className="absolute top-2 right-4 text-gray-500 hover:text-red-500 font-bold"
                  onClick={() => setIsModal(false)} // Replace with your close function
                >
                  ✕
                </button>

                
                <form action="" className="flex flex-col space-y-3 mt-10">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={selectedUser.name}
                    onChange={(e)=> setSelectedUser({...selectedUser,name:e.target.value})}
                    className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={selectedUser.email}
                    onChange={(e)=> setSelectedUser({...selectedUser,email:e.target.value})}
                    className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    onClick={handleEdit}
                  >
                    Submit
                  </button>
                </form>
              </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

