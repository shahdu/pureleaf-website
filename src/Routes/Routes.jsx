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
import { AdminProtect } from "./ProtectRoutes/AdminProtect";
import { ProductsAdminList } from "../pages/Admin/ProductsAdminList";
import { UpdateProduct } from "../pages/Admin/UpdateProduct";
import { UsersList } from "../pages/Admin/UsersList";
import { ProtectRoute } from "./ProtectRoutes/ProtectRoute";
import { UserDashboard } from "../pages/Customer/UserDashboard";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { AdminProductsList } from "../pages/Admin/ProductsList/AdminProductsList";

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
        path: "/productsList",
        element: <ProductsList />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      
      {
        path: "/dashboard/user",
        element: <ProtectRoute />,
        children: [
          {
            path: "",
            element: <UserDashboard />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
            ],
          },
        ],
      },

      {
        path: "/dashboard/admin",
        element: <AdminProtect />,
        children: [
          {
            path: "",
            element: <AdminDashboard />,
            children: [
              {
                index: true,
                element: <UsersList />,
              },
              {
                path: "users",
                element: <UsersList />,
              },
              {
                path: "products",
                element: <AdminProductsList />,
              },
              {
                path: "categories",
                element: <CategoryList />,
              },
            ],  
          },
          {
            path: "updateProduct/:productId",
            element: <UpdateProduct />,
          },
          {
            path: "addProduct",
            element: <AddProduct />,

          },
          {
            path: "addCategory",
            element: <AddCategory />,
          },

        ],
      },
    ],
  },
]);
