// CategoryContext.js
import React, { createContext, useState, useEffect } from "react";
import { getAllCategories, addCategory } from "../Services/categoryService";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // New state for selected category ID

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");



  const fetchCategories = async () => {
    try {
      const categoriesData = await getAllCategories(
        searchValue,
        pageNumber,
        pageSize,
        sortOrder
      );
      setCategories(categoriesData.data.items);
      console.log(categoriesData);
      setTotalPages(categoriesData.data.totalPages);
      console.log(totalPages);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    fetchCategories();
  }, [searchValue, pageNumber, sortOrder]);

  // Add a new category  the context
  const handleAddCategory = async (categoryName) => {
    try {
      const newCategory = await addCategory(categoryName);
      setCategories((prevCategories) => [...prevCategories, newCategory.data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  const refresh = async () => {
    await fetchCategories();
  };
  return (
    <CategoryContext.Provider
      value={{
        categories,
        selectedCategoryId, // Exposed
        setSelectedCategoryId,
        handleAddCategory,
        setCategories,
        refresh,
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
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
