import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
  }
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
