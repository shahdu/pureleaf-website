import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Products } from "../pages/Customer/Products";
import { Home } from "../pages/Customer/Home";
import { createBrowserRouter } from "react-router-dom";
import { ProductDetails } from "../pages/Customer/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);