
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({children}) => {
    const user = useSelector((store)=> store?.user?.user)
    console.log(user)
    if(!user){
        
        return <Navigate to={'/'} replace/>
    }

    if (user.role === 'admin') {
      return <Navigate to={'/admin'} replace/>
    }
    
  return children
  //return <Navigate to={'/admin'} replace/>
}

export default PrivateRoute
