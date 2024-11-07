import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Products } from "../pages/Customer/Products";
import { ProductsList } from "../pages/Customer/ProductsList";
import { ProductDetails } from "../pages/Customer/ProductDetails";
import Error from "../pages/Error";
import { SignIn } from "../pages/Customer/SignIn";
import { SignUp } from "../pages/Customer/SignUp";
import { Profile } from "../pages/Customer/Profile";
import { AddProduct } from "../pages/Admin/AddProduct";
import { CustomerDashboard } from "./ProtectRoutes/CustomerDashboard";
import { Home } from "../pages/Customer/Home";
import { Cart } from "../components/Cart/Cart";
import { AddCategory } from "../pages/Admin/AddCategory";
import { CategoryList } from "../pages/Admin/CategoryList";
import { AdminDashboard } from "./ProtectRoutes/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/productsList",
        element: <ProductsList />,
      }, 
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
        children: [
          {
            path: "addProduct",
            element: <AddProduct />,
          },
      {
        path: "categoryList",
        element: <CategoryList />,
      },{
        path: "addCategory",
        element: <AddCategory />,
      },
        ],
      },
      {
        path: "/dashboard/customer",
        element: <CustomerDashboard />,
        children: [
       
            {
            path: "cart",
            element: <Cart />,
          },
     
        ],
      },
    ],
  },
]);
