import LoginPage from "../Pages/userPages/LoginPage";
import Home from "../Pages/userPages/Home";

const userRoutes = [
    {
        path:'/',
        element:<LoginPage />

    },
    {
        path:'/home',
        element:<Home />
    }
]

export default userRoutes