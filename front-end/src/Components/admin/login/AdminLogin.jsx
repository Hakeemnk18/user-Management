import { useState } from "react"
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from "../../../schemas/adminValidationSchema";


const AdminLogin = () => {
    console.log("admin login")
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        alert('Form submitted successfully!');
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        {/* Main container with background image */}
        <div
          className="relative w-full max-w-5xl h-[500px] rounded-lg overflow-hidden shadow-xl"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1701791988754-d200cc1b78c7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsdWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#0066cc", // Fallback color
          }}
        >
          {/* Blue circle decoration */}
          <div className="absolute bottom-0 left-0 w-[80%] h-[80%] rounded-full bg-blue-500 opacity-50 transform translate-y-1/4 -translate-x-1/4"></div>
  
          {/* Left side - Welcome text */}
          <div className="absolute left-0 top-0 w-1/2 h-full p-10 flex flex-col justify-center">
            <div className="relative z-10 text-white">
              <h1 className="text-5xl font-bold mb-2">WELCOME</h1>
              <h2 className="text-xl font-semibold mb-4">YOUR HEADLINE NAME</h2>
              <p className="text-sm opacity-90 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim quis nostrud exerci tation.
              </p>
            </div>
          </div>
  
          {/* Right side - Sign in form floating on top of blue background */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-5/12 bg-white p-8 rounded-lg shadow-lg">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-blue-900 mb-1">Sign in</h2>
              <p className="text-gray-500 text-sm mb-6">Please log in to access the admin dashboard and manage the platform.</p>
  
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Username field */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("email")}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                  
                </div>
  
                {/* Password field */}
                <div className=" relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <span className="text-gray-600 font-medium">HIDE</span>
                    ) : (
                      <span className="text-blue-600 font-medium">SHOW</span>
                    )}
                  </button>
                </div>
                <div className="mb-2">
                  {
                    errors.password && <span className="text-red-500">{errors.password.message}</span>
                  }
                  
                </div>
                
  
                {/* Remember me and Forgot Password */}
                <div className="flex justify-between items-center mb-6 m-t4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>
  
                {/* Sign In button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
                >
                  Sign In
                </button>
  
                {/* Sign Up link */}
                <div className="text-center mt-6 text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 font-medium">
                    Sign Up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AdminLogin
