import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const UserPrivateRoute = ({children}) => {
    const user = useSelector((store) => store.user.user)
    console.log(user)

    if(!user){
        return <Navigate to={'/'} />
    }
  return children
}

export default UserPrivateRoute

