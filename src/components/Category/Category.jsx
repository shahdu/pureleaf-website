import React, { useContext } from "react";
import { Button, TableCell, TableRow, IconButton } from "@mui/material";
import { deleteCategoryById } from "../../Services/categoryService";
import { CategoryContext } from "../../Context/CategoryContext";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Category = ({ category }) => {
  const { refresh } = useContext(CategoryContext);

  const handleDelete = async () => {
    try {
      await deleteCategoryById(category.categoryId);
      refresh();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <TableRow sx={{ "&:hover": { backgroundColor: "#e8f5e9" } }}>
      <TableCell>{category.categoryName}</TableCell>
      <TableCell align="center">
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link
            to={`/dashboard/admin/updateCategory/${category.categoryId}`}
            style={{
              display: "inline-block",
              padding: "6px 12px",
              color: "#fff",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            <IconButton sx={{ color: "gray" }}>
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  );
};
