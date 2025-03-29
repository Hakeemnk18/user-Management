import { createBrowserRouter,RouterProvider } from "react-router-dom";
import allRoutes from "./routes/index";
import { createRoot } from 'react-dom/client'
import './index.css'


const appRouter = createBrowserRouter(allRoutes)

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)