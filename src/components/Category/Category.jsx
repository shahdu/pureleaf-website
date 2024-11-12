import React, { useContext } from "react";
import { Button, TableCell, TableRow } from "@mui/material";

import { deleteCategoryById } from "../../Services/categoryService";
import { CategoryContext } from "../../Context/CategoryContext";

export const Category = ({ category }) => {
  const { refresh } = useContext(CategoryContext);


  const handleDelete = async () => {
    try {
      await deleteCategoryById(category.categoryId);
      console.log(" :", category.categoryId);
      refresh();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#f1f8e9", // Light green hover effect
        },
      }}
    >

      <TableCell>{category.categoryName}</TableCell>
   
      <TableCell>
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          sx={{
            "&:hover": {
              backgroundColor: "#d32f2f", // Red on hover
              color: "white",
            },
            padding: "6px 12px",
            fontSize: "0.875rem",
            textTransform: "none",
            borderRadius: "20px", // Rounded button
            borderColor: "#81C784", // Light green border color
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
