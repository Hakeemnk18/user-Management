import React from 'react'
import Navbar from '../../Components/admin/navbar/AdminNavbar'
import UsersTable from '../../Components/admin/userTable/UserTable'

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <UsersTable />
    </>
  )
}

export default AdminDashboard
