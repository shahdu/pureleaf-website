import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container, Grid, Paper } from "@mui/material";
import { useCart } from "../../hooks/useCart";

export const ProductDetails = () => {
  const navigator = useNavigate();
  const { state } = useLocation();
  const { addToCart } = useCart();

  return (
    <Container
      sx={{
        maxWidth: "1200px", // Wider container for larger screens
        marginTop: 5,
        backgroundColor: "#fff", // White background for the product details
        borderRadius: "10px",
        boxShadow: 3,
        padding: 3,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section: Product Image */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, borderRadius: "12px", boxShadow: 3 }}>
            <img
              src={state.image}
              alt={state.productName}
              style={{
                maxWidth: "100%", // Image should fit the container width
                height: "auto",
                borderRadius: "10px", // Soft corners for the image
                objectFit: "contain", // Keep aspect ratio intact
              }}
            />
          </Paper>
        </Grid>

        {/* Right Section: Product Details */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#388E3C" }}>
              {state.productName}
            </Typography>
            <Typography variant="h6" sx={{ color: "#388E3C", marginTop: "8px" }}>
              <strong>Price:</strong> ${state.price.toFixed(2)}
            </Typography>
            <Typography variant="body1" sx={{ color: "#616161", lineHeight: "1.6" }}>
              <strong>Description:</strong> {state.description}
            </Typography>
            <Typography variant="body1" sx={{ color: "#388E3C", fontWeight: "bold" }}>
              <strong>Category:</strong> {state.category.categoryName}
            </Typography>

            {/* Buttons Section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  backgroundColor: "#388E3C",
                  "&:hover": {
                    backgroundColor: "#2E7D32", // Darker green on hover
                  },
                  padding: "8px 16px", // Smaller size
                  fontSize: "14px", // Smaller text size
                  fontWeight: "bold",
                  width: "48%", // Make buttons smaller and inline
                }}
                onClick={() => navigator("/productsList")}
              >
                Back To List
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1E88E5", // Blue color for "Add to Cart"
                  "&:hover": {
                    backgroundColor: "#1565C0", // Darker blue on hover
                  },
                  padding: "8px 16px", // Smaller size
                  fontSize: "14px", // Smaller text size
                  fontWeight: "bold",
                  width: "48%", // Make buttons smaller and inline
                }}
                onClick={() => addToCart(state)}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
