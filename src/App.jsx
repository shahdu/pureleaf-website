import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import  {ProductProvider}  from "./Context/ProductContext.jsx";
import { router } from "./Routes/Routes.jsx";
 

export const App = () => {
  
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
};
