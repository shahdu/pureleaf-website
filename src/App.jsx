import React from "react";
import { RouterProvider } from "react-router-dom";

import { ProductProvider } from "./Context/ProductContext.jsx";
import { router } from "./Routes/Routes.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import { CategoryProvider } from "./Context/CategoryContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

export const App = () => {
  return (
    <ProductProvider>
      <CategoryProvider>
      <CartProvider>
      <UserProvider> 

        <RouterProvider router={router} />
        </UserProvider> 

      </CartProvider>
      </CategoryProvider>
    </ProductProvider>
  );
};
