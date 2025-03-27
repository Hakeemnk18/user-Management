
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {
    const user = useSelector((store)=> store?.user?.user)

    if(!user){
        return <Navigate to={'/'} replace/>
    }
    
  return children
}

export default PrivateRoute
