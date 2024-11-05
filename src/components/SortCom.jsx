// SortComponent.jsx
import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

export const SortCom = () => {
  const { setSortOrder } = useContext(ProductContext);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <label>
        Order:
        <select onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};
