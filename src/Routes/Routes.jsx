import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Products } from "../components/products/Products";
import { ProductsList } from "../components/products/ProductsList";
import { ProductDetails } from "../components/products/ProductDetails";
import Error from "../pages/Error";
import { SignIn } from "../pages/Customer/SignIn";
import { SignUp } from "../pages/Customer/SignUp";
import { Profile } from "../pages/Customer/Profile";
import { AddProduct } from "../components/products/AddProduct";
import { CustomerDashboard } from "./ProtectRoutes/CustomerDashboard";
import { Home } from "../pages/Customer/Home";
import { Cart } from "../components/Cart/Cart";
import { AddCategory } from "../components/Category/AddCategory";
import { CategoryList } from "../components/Category/CategoryList";
import { AdminProtect } from "./ProtectRoutes/AdminProtect";
// import { ProductsAdminList } from "../pages/Admin/ProductsAdminList";
import { UpdateProduct } from "../components/products/UpdateProduct";
import { UsersList } from "../components/Users/UsersList";
import { ProtectRoute } from "./ProtectRoutes/ProtectRoute";
import { UserDashboard } from "../pages/Customer/UserDashboard";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { AdminProductsList } from "../pages/Admin/ProductsList/AdminProductsList";
import { UpdateCategory } from "../components/Category/UpdateCategory";
import { DataAnalytics } from "../pages/Admin/DataAnalytics";
import { CreateOrder } from "../components/Order/CreateOrder";

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
      },{
        path: "/createOrder",
        element: <CreateOrder />,
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
              {
                path: "DataAnalytics",
                element: <DataAnalytics />,
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
          { path: "updateCategory/:categoryId", element: <UpdateCategory /> },
        ],
      },
    ],
  },
]);
