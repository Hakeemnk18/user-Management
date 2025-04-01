import adminRoutes from "./adminRoutes.jsx";
import App from "../App.jsx";
import React from "react";
import userRoutes from "./userRoutes.jsx";


const allRoutes = [
    {
      path: '/',
      element: <App />, 
      children: [
        ...userRoutes,
        ...adminRoutes
      ],
    },
];

export default allRoutes