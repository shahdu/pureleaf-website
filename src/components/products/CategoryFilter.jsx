import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";

export const CategoryFilter = () => {
  const { categories, setSelectedCategoryId } = useContext(CategoryContext);

  const handleCategoryClick = (categoryId) => {
    console.log("Selected category ID@@:", categoryId); 
    setSelectedCategoryId(categoryId); 
  };

  return (
    <div className="text-center mb-4">
      <button onClick={() => handleCategoryClick(null)} className="btn btn-outline-primary mx-2">
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.categoryId}
          onClick={() => handleCategoryClick(category.categoryId)} // Use categoryId here
          className="btn btn-outline-primary mx-2"
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};
