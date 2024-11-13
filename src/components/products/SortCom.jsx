import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";

export const SortCom = () => {
  const { sortOrder, sortBy, setSortOrder, setSortBy } =
    useContext(ProductContext);

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value === "asc" ? "asc" : "desc");
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
    // Reset sort order when changing sort type
    setSortOrder("asc"); // Default to ascending order
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "15px",
        backgroundColor: "#f7f7f7", // Light gray background
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "250px", // Limit the width
        marginLeft: "auto", // Align to the right
        marginRight: "0", // Ensure no extra space on the right side
      }}
    >
      <label
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#2e7d32", // Darker green color
        }}
      >
        Sort By:
        <select
          value={sortBy}
          onChange={handleSortByChange}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#2E7D32",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <option value="CreatedAt">Date</option>
          <option value="Price">Price</option>
        </select>
      </label>

      <label
        style={{
          fontSize: "16px",
          fontWeight: "500",
          color: "#2E7D32",
        }}
      >
        Order:
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          style={{
            marginLeft: "10px",
            padding: "5px 10px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "#2e7d32",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {sortBy === "Price" ? (
            <>
              <option value="asc">Lower to Higher</option>
              <option value="desc">Higher to Lower</option>
            </>
          ) : (
            <>
              <option value="desc">Newest to Oldest</option>
              <option value="asc">Oldest to Newest</option>
            </>
          )}
        </select>
      </label>
    </div>
  );
};
