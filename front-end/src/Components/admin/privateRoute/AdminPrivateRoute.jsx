import { useSelector } from 'react-redux'


import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
    const admin = useSelector((store) => store.admin.user)
    
    if(!admin){
        
        return <Navigate to={'/admin'} replace/>
    }
  
    return children
}

export default AdminPrivateRoute

