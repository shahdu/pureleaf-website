import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { CategoryContext } from "../../Context/CategoryContext";
import { Category } from "./Category";  // Make sure the path is correct
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { categories } = useContext(CategoryContext);
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/dashboard/admin/addCategory');
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4" style={{ color: '#388E3C', fontWeight: 'bold' }}>
        Category List
      </h2>

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <Button
          variant="contained"
          onClick={handleAddCategory}
          sx={{
            backgroundColor: '#388E3C', // Dark green color
            padding: "10px 20px",
            fontSize: "1rem",
            borderRadius: "20px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#2c6b2f", // Darker green on hover
            },
          }}
        >
          Add Category
        </Button>
      </div>

      <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#81C784", color: "#fff" }}>
              <TableCell>Category Name</TableCell>
              <TableCell align="center">Actions</TableCell> {/* Align 'Actions' header to the center */}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <Category key={category.categoryId} category={category} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No categories found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
