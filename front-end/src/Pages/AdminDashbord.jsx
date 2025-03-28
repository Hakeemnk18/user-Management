import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminDashboard = () => {

  // Sample user data
  const [users, setUsers] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchData(){
    try {
        console.log("inside fetch data")
        const response = await fetch('/api/admin')

        const json = await response.json()
        console.log(json)
        console.log("fetch completed")
        setUsers(json.users)
        
    } catch (error) {
        console.log(error.message)
        toast.error("server error")
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  // Open Modal and set user for editing
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Handle Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  // Handle Save Edited User
  const saveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Admin Dashboard
        </h2>

        {/* User List */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Role</th>
              <th className="border p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-3">{user.name}</td>
                <td className="border p-3">{user.email}</td>
                <td className="border p-3">{user.role}</td>
                <td className="border p-3 space-x-3">
                  <button
                    onClick={() => openModal(user)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Edit User Details
            </h3>

            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              value={selectedUser.name}
              onChange={(e) =>
                setSelectedUser({ ...selectedUser, name: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />
            {/* Email Input */}
            <input
              type="text"
              placeholder="Email"
              value={selectedUser.email}
              onChange={(e) =>
                setSelectedUser({ ...selectedUser, email: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            />
            {/* Role Input */}
            <select
              value={selectedUser.role}
              onChange={(e) =>
                setSelectedUser({ ...selectedUser, role: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={saveUser}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

