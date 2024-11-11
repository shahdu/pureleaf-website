import React, { useContext } from "react";
import { Button,Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import { AdminProduct } from "./AdminProduct";
import { ProductContext } from "../../../Context/ProductContext";
import { Link } from "react-router-dom";

export const AdminProducts = () => {
  const { data, isLoading, error } = useContext(ProductContext);

  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-4">
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4" style={{ color: '#388E3C', fontWeight: 'bold' }}>
        Products Dashboard
      </h2>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        {/* Button to add new product, positioned at the top right */}
        <Link to="/dashboard/admin/addProduct">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#388E3C", // Dark green color
              padding: "10px 20px",
              fontSize: "1rem",
              borderRadius: "20px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#2c6b2f", // Darker green on hover
              },
            }}
          >
            Add New Product
          </Button>
        </Link>
      </div>
      <TableContainer component={Paper} sx={{ borderRadius: "10px", boxShadow: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#81C784", // Light green background for header
                color: "#fff", // White text for header
              }}
            >
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell> {/* Moved Description header before CreatedAt */}
              <TableCell>Created At</TableCell> {/* Moved CreatedAt header after Description */}
              <TableCell>Actions</TableCell> {/* Combined action column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.length > 0 ? (
              data.map((product) => (
                <AdminProduct key={product.productId} product={product} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No products found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
};
