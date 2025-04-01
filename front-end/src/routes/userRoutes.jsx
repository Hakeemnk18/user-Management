import LoginPage from "../Pages/userPages/LoginPage";
import Home from "../Pages/userPages/Home";
import UserPrivateRoute from "../Components/user/privateRoute/UserPrivateRoute";
import UserPublicRoute from "../Components/user/publicRoute/UserPublicRoute";

const userRoutes = [
    {
        path:'/',
        element:(
            <UserPublicRoute >
                <LoginPage />
            </UserPublicRoute>
        )

    },
    {
        path:'/home',
        element:(
            <UserPrivateRoute >
                <Home />
            </UserPrivateRoute>
        )
    }
]

export default userRoutes