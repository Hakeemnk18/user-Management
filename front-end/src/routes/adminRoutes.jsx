import AdminLoginPage from "../Pages/adminPages/AdminLoginPage.jsx";
import AdminDashboard from "../Pages/adminPages/AdminDashboard.jsx";
import React from "react";

console.log("admin routes")
const adminRoutes = [
  { path: '/admin', element: <AdminLoginPage/> },
  { path: '/admin/dashboard', element: <AdminDashboard />}
  
];

export default adminRoutes;