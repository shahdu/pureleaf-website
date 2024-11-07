import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getAllProducts } from "../Services/ProductService";

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
  useEffect(() => {

    fetchProducts();
  }, [searchValue,pageNumber,sortOrder]);
  console.log(searchValue);
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
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.prototype = {
  children: PropTypes.node,
};
