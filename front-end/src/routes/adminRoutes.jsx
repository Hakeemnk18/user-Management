import AdminLoginPage from "../Pages/adminPages/AdminLoginPage.jsx";
import AdminDashboard from "../Pages/adminPages/AdminDashboard.jsx";
import React from "react";
import AdminPrivateRoute from "../Components/admin/privateRoute/AdminPrivateRoute.jsx";
import AdminPublicRoute from "../Components/admin/publicRoute/AdminPublicRoute.jsx";

console.log("admin routes")
const adminRoutes = [
  { 
    path: '/admin', element:(
      <AdminPublicRoute>
        <AdminLoginPage/>
      </AdminPublicRoute>
    )  
  },
  {
    path: '/admin/dashboard',
    element: (
      <AdminPrivateRoute>
        <AdminDashboard />
      </AdminPrivateRoute>
    ),
  }, 
];

export default adminRoutes;