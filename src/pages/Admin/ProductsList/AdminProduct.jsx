import React, { useContext } from "react";
import { TableCell, TableRow, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteProductById } from "../../../Services/ProductService";
import { ProductContext } from "../../../Context/ProductContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const AdminProduct = ({ product }) => {
  const { refreshProducts } = useContext(ProductContext);

  const handleDelete = async () => {
    try {
      await deleteProductById(product.productId);
      console.log("Product deleted:", product.productId);
      refreshProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Format the createdAt date to a more user-friendly format
  const formattedDate = new Date(product.createdAt).toLocaleString("en-US", {
    weekday: "short", // Abbreviated day of the week
    year: "numeric",  // Full year
    month: "short",   // Abbreviated month
    day: "numeric",   // Day of the month
    hour: "numeric",  // Hour in 12-hour format
    minute: "numeric", // Minute
    second: "numeric", // Second
    hour12: true,     // Use 12-hour clock
  });

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "#e8f5e9", // Lighter green for hover
        },
      }}
    >
      <TableCell>
        <img
          src={product.image}
          alt={product.productName}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid #81C784", // Light green border
          }}
        />
      </TableCell>
      <TableCell>{product.productName}</TableCell>
      <TableCell>{product.price.toFixed(2)}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell>
        {/* Make sure the date stays in one line */}
        <span style={{ whiteSpace: "nowrap" }}>{formattedDate}</span>
      </TableCell>
      <TableCell>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <Link
            to={`/dashboard/admin/updateProduct/${product.productId}`}
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
