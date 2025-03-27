import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector((store)=> store.user.user)
    console.log(user)
  return (
    <div className='text-9xl'>
      welcome home
    </div>
  )
}

export default Home

