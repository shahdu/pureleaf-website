// CategoryContext.js
import React, { createContext, useState, useEffect } from "react";
import { getAllCategories,addCategory } from "../Services/categoryService";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Add a new category and update the context
  const handleAddCategory = async (categoryName) => {
    try {
      const newCategory = await addCategory(categoryName);
      setCategories((prevCategories) => [...prevCategories, newCategory.data]);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <CategoryContext.Provider value={{ categories, handleAddCategory,setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
