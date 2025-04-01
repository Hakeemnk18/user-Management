import { useState, useEffect } from "react"
//import Link from "next/link"
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShield } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../../store/slices/userSlice"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const user = useSelector((store) => store?.user?.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  // Add scroll event listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('adminToken')
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-950 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-20">
          <FontAwesomeIcon icon={faShield} className="h-8 w-8 text-indigo-900" />
          <span className="ml-2 text-xl font-bold text-white">SHIELD</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 mr-20">
          <Link href="/" className="text-gray-400 hover:text-indigo-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-indigo-700 transition-colors">
            About Us
          </Link>
          <Link href="/service" className="text-gray-400 hover:text-indigo-700 transition-colors">
            Service
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-indigo-700 transition-colors">
            Contact Us
          </Link>
          {
            user ? <button 
            className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800 transition-colors cursor-pointer"
            onClick={logout}
            >
            Logout
          </button> :
          <button className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-indigo-800 transition-colors cursor-pointer">
          Login
          </button>
          }
          
        </div>

        {/* Mobile Menu Button - Hidden on desktop */}
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
