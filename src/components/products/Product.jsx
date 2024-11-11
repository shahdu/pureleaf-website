import React, { useContext } from "react";
import { useCart } from "../../hooks/useCart";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteProductById } from "../../Services/ProductService";
import { ProductContext } from "../../Context/ProductContext";

export const Product = ({ product }) => {
  const { addToCart } = useCart();




  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 4,
        marginBottom: 2,
        borderRadius: 2,
        backgroundColor: "#E8F5E9", // Light green for eco-friendly look
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Needed to position the frame inside the div
        }}
      >
        <img
          src={product.image}
          alt={product.productName}
          style={{
            width: "100%", // Takes the full width of the parent div
            height: "auto", // Maintain the image aspect ratio
            borderRadius: "12px", // Soft corners for the image
            border: "4px solid #A5D6A7", // Green border framing the image
            boxSizing: "border-box", // Ensures the border is part of the total size of the image
          }}
        />
      </div>
      <CardContent>
        <Typography variant="h6" component="div" color="text.primary">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: 2,
            backgroundColor: "#388E3C",
            color: "white",
            "&:hover": {
              backgroundColor: "#2E7D32",
            },
          }}
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
        <div style={{ marginTop: "8px" }}>
          <Link
            to={`/product/${product.productId}`}
            state={product}
            className="btn btn-outline-success"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "8px",
              padding: "8px 16px",
              backgroundColor: "#388E3C",
              color: "#ffffff",
              borderRadius: "4px",
              fontWeight: "normal", // Adjusted to normal weight
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2E7D32";  // Darker green on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#388E3C";  // Reset to original color
            }}
          >
            Show Details
          </Link>
          
        </div>
      </CardContent>
    </Card>
  );
};
