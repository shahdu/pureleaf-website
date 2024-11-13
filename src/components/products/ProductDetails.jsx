import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Box, Container, Grid, Paper } from "@mui/material";
import { useCart } from "../../hooks/useCart";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { addToCart } = useCart();

  return (
    <Container
      sx={{
        maxWidth: "1200px", // Wider container for larger screens
        marginTop: 5,
        backgroundColor: "#ffffff", // Clean white background for product details
        borderRadius: "15px", // Softer rounded corners
        boxShadow: 3,
        padding: 3,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section: Product Image */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, borderRadius: "15px", boxShadow: 3 }}>
            <img
              src={state.image}
              alt={state.productName}
              style={{
                maxWidth: "100%", // Image should fit the container width
                height: "auto",
                borderRadius: "12px", // Softer corners for the image
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

            {/* Price */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography variant="body1" sx={{ color: "#388E3C", fontWeight: "bold" }}>
                <strong>Price:</strong>
              </Typography>
              <Typography variant="body1" sx={{ color: "#000000" }}>
                ${state.price.toFixed(2)}
              </Typography>
            </Box>
            
            {/* Description */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography variant="body1" sx={{ color: "#388E3C", fontWeight: "bold" }}>
                <strong>Description:</strong>
              </Typography>
              <Typography variant="body1" sx={{ color: "#000000" }}>
                {state.description}
              </Typography>
            </Box>

            {/* Category */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography variant="body1" sx={{ color: "#388E3C", fontWeight: "bold" }}>
                <strong>Category:</strong>
              </Typography>
              <Typography variant="body1" sx={{ color: "#000000" }}>
                {state.category.categoryName}
              </Typography>
            </Box>

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
                  padding: "10px 20px", // Larger button size
                  fontSize: "16px", // Slightly larger text size
                  fontWeight: "bold",
                  width: "48%", // Inline button style
                  borderRadius: "8px", // Rounded button corners
                }}
                onClick={() => navigate("/productsList")}
              >
                Back To List
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#388E3C", // Green color for "Add to Cart"
                  "&:hover": {
                    backgroundColor: "#2E7D32", // Darker green on hover
                  },
                  padding: "10px 20px", // Larger button size
                  fontSize: "16px", // Slightly larger text size
                  fontWeight: "bold",
                  width: "48%", // Inline button style
                  borderRadius: "8px", // Rounded button corners
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
