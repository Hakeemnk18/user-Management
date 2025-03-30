import React from 'react'

const EditUserModal = ({onClose,changeName,selectedUser,changeEmail,handleEdit}) => {
  return (
    <div className="w-[280px] bg-white p-4 shadow-lg rounded-lg absolute bottom-80 right-40">
  
            <button
                  className="absolute top-2 right-4 text-gray-500 hover:text-red-500 font-bold"
                  onClick={onClose} 
                >
                  ✕
            </button>

                
            <form action="" className="flex flex-col space-y-3 mt-10">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={selectedUser.name}
                    onChange={(e) => changeName(e)}
                    className="text-gray-500 placeholder-gray-500 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={selectedUser.email}
                    onChange={(e) => changeEmail(e)}
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
  )
}

export default EditUserModal
