import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRouter = ({children}) => {

    const user = useSelector((store)=> store?.user?.user)
    console.log("inside public ",user)

    if(user){
        console.log("inside if public")
        return <Navigate to={'/home'} replace />
    }
  
    return children
}

export default PublicRouter
