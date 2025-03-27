import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Components/Login.jsx';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Login />
      },
      {
        path:'/home',
        element:<Home />
      }
    ]
  }
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
