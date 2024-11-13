import React from "react";
import { Box, Typography, Container } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#388E3C", // Green background
          color: "#fff", // White text
          padding: { xs: "10px 0", sm: "15px 0", md: "20px 0" }, // Adjust padding for different screen sizes
          textAlign: "center",
          fontSize: { xs: "0.8rem", sm: "1rem" }, // Smaller font on extra-small screens
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
            {new Date().getFullYear()} PureLeaf. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </footer>
  );
};
