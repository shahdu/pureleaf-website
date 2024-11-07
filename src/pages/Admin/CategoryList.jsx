// components/CategoryList.js
import React, { useContext } from 'react';
import { CategoryContext } from '../../Context/CategoryContext';

export const CategoryList = () => {
  const { categories, loading, error } = useContext(CategoryContext);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Categories</h1>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category.categoryId} className="list-group-item">
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

