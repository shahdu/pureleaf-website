import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Paper, Box, Container } from "@mui/material";

export const ProductDetails = () => {
  const navigator = useNavigate();
  const { state } = useLocation();

  return (
    <Container
      sx={{
        maxWidth: "900px",
        marginTop: 5,
        backgroundColor: "#F1F8E9", // Soft light green background
        borderRadius: "10px",
        padding: 3,
        boxShadow: 3,
      }}
    >
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <img
          src={state.image}
          alt={state.productName}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px", // Soft corners for the image
            border: "4px solid #A5D6A7", // Green border around the image
            marginBottom: "16px",
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#388E3C" }}>
          {state.productName}
        </Typography>
        <Typography variant="h6" sx={{ color: "#388E3C", marginTop: "8px" }}>
          <strong>Price:</strong> ${state.price.toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="body1" sx={{ color: "#616161", lineHeight: "1.6" }}>
          <strong>Description:</strong> {state.description}
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="body1" sx={{ color: "#388E3C" }}>
          <strong>Category:</strong> {state.category.categoryName}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          sx={{
            backgroundColor: "#388E3C",
            "&:hover": {
              backgroundColor: "#2E7D32", // Darker green on hover
            },
            padding: "10px 20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={() => navigator("/productsList")}
        >
          Back To List
        </Button>
      </Box>
    </Container>
  );
};
