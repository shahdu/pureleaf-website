import React, { useState, useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";

export const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const { handleAddCategory } = useContext(CategoryContext);

  const handleSubmit = () => {
    handleAddCategory(categoryName);
    setCategoryName("");
  };

  return (
    <div>
      <h2>Add Category</h2>
      <input
        type="text"
        placeholder="Category Name"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Category</button>
    </div>
  );
};


