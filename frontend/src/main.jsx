import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/ProductPage",
    element: <ProductPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
