import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';

const Home = () => {
  const user = useSelector((store) => store?.user?.user);
  console.log(user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-96 bg-white p-8 rounded-3xl shadow-lg text-center mx-auto mt-12">
      {/* User Image */}
      <img
        src={user.image}
        alt="User"
        className="w-40 h-40 rounded-full border-4 border-blue-500 mx-auto mb-6"
      />

      {/* User Info */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-600 text-lg">{user.email}</p>
      </div>

      {/* Edit Button */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition duration-300 text-lg"
      >
        Edit Profile
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Edit Your Profile
            </h3>

            <form>
              {/* Name Input */}
              <input
                type="text"
                placeholder="Enter your name"
                defaultValue={user.name}
                className="w-full mb-3 p-2 border rounded"
              />
              {/* Email Input */}
              <input
                type="text"
                placeholder="Enter your email"
                defaultValue={user.email}
                className="w-full mb-3 p-2 border rounded"
              />
              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

      
}

export default Home

