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
  const [pageSize, setPageSize] = useState(10);
  // const [sortBy, setSortBy] = useState("ProductName");
  const [sortOrder, setSortOrder] = useState("asc");


  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getAllProducts(
        searchValue,
        pageNumber,
        pageSize,
        sortOrder
      );
      console.log("searchValue:", searchValue);
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
  }, [searchValue,pageNumber,sortOrder]);

 


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
        sortOrder,
        setSortOrder,
        totalPages,
        fetchProducts,
        refreshProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};
