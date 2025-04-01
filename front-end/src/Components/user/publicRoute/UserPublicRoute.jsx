import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UserPublicRoute = ({children}) => {
    const user = useSelector((store) => store.user.user)

    if(user){
        return <Navigate to={'/home'} />
    }
  return children
}

export default UserPublicRoute
