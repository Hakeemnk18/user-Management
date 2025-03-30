import React from 'react'

const DeleteConfirmModal = ({onCancel,deleteUser}) => {
  return (
    <div className="bg-black/30 absolute inset-0 flex items-center justify-center">
         <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                  
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirm Delete</h2>
                  <p className="text-gray-600 mb-6">Are you sure you want to delete this item?</p>

                  
            <div className="flex justify-end space-x-3">
                    <button
                      onClick={onCancel}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={deleteUser}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                      Delete
                </button>
            </div>
         </div>
    </div>
  )
}

export default DeleteConfirmModal
