import PropTypes from "prop-types";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAllProducts } from "../Services/ProductService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllProducts();
        setData(response);
        console.log(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  

  return (
    <ProductContext.Provider value={{ data, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
  
};
ProductProvider.propTypes = {
  children: PropTypes.node,
};
