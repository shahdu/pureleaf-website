import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts,  getProductById } from "../Services/ProductService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("CreatedAt");

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        searchValue,
        pageNumber,
        pageSize,
        sortOrder,
        sortBy
      );
      console.log("sortOrder:", sortOrder);
      console.log("sortBy:", sortBy);
      console.log("API response:", response);

      setData(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const refreshProducts = async () => {
    await fetchProducts();
  };
  useEffect(() => {

    fetchProducts();
  }, [searchValue,pageNumber,sortOrder,sortBy]);

 


  return (
    <ProductContext.Provider
      value={{
        data,
        isLoading,
        error,
        searchValue,
        setSearchValue,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        totalPages,
        fetchProducts,
        refreshProducts,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};
