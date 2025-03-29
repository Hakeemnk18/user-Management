import adminRoutes from "./adminRoutes.jsx";
import App from "../App.jsx";
import React from "react";


const allRoutes = [
    {
      path: '/',
      element: <App />, 
      children: [
        ...adminRoutes
      ],
    },
];

export default allRoutes