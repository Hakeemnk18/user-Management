import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Components/Login.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import PublicRouter from './Components/PublicRouter.jsx';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:
        <PublicRouter>
          <Login />
        </PublicRouter>
        
      },
      {
        path:'/home',
        element:
        <PrivateRoute>
          <Home />
        </PrivateRoute>
          
        
          
        
        
      }
    ]
  }
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)
