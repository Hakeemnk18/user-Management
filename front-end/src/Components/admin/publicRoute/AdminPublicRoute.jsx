import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminPublicRoute = ({children}) => {
    const admin = useSelector((store) => store.admin.user)
    
    if(admin){
        return <Navigate to={'/admin/dashboard'} replace/>
    }

  return children
}

export default AdminPublicRoute
