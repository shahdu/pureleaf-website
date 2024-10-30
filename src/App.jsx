import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Products } from "./components/products/Products";
import { ProductProvider } from "./Context/ProductContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import NavBar from "./Layout/navbar/NavBar";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/nav",
      element: <NavBar />,
    },
    // {
    //   path: "/list",
    //   element: <Products />,
    // },
  ]);
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};
