import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Products } from "../pages/Customer/Products";
import { Home } from "../pages/Customer/Home";
import { ProductDetails } from "../pages/Customer/ProductDetails";
import Error from "../pages/Error";
import { SignIn } from "../pages/Customer/SignIn";
import { SignUp } from "../pages/Customer/SignUp";
import { Profile } from "../pages/Customer/Profile";
import { AddProduct } from "../pages/Admin/AddProduct";
import { CustomerDashboard } from "./ProtectRoutes/CustomerDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
        {
            path: "/",
            element: <Home />,
          },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails/>,
      }
      ,
      {
        path: "/signIn",
        element: <SignIn/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/dashboard/user",
        element: <CustomerDashboard />, 
        children: [
          {
            path: "addProduct", 
            element: <AddProduct />,
          },
        ],
      },
    ],
  },
]);

