import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeUser } from '../utils/userSlice'
const Navbar = () => {
  const user = useSelector((store)=> store?.user?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = ()=>{
    localStorage.removeItem('token');
    dispatch(removeUser())
    navigate('/')
  }
     
  return (
    <div className='bg-gray-300 h-20 flex justify-between items-center'>
      <div className='px-20'>
        <h1 className='text-4xl font-bold'>User Management</h1>
      </div>
      <div className='px-20'>
        <ul className='flex space-x-2.5 '>
            <li className='hover:underline hover:cursor-pointer'>Home</li>
            <li className='hover:underline hover:cursor-pointer'>About</li>

            
              {
                user ? <li 
                className='hover:underline hover:cursor-pointer'
                onClick={logout}
                >Logout</li>
                 : <li className='hover:underline hover:cursor-pointer'>Login</li> 
              }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
