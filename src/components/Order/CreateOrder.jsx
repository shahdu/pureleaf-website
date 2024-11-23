import React, { useState, useContext } from "react";
import { createOrder } from "../../Services/OrderService";
import { CartContext } from "../../Context/CartContext";
import { decodeToken } from "../../Utilities/TokenDecode";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Divider,
  Box,
  Container,
} from "@mui/material";

export const CreateOrder = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/signIn");
    return null;
  }

  const decoded = decodeToken(token);
  const userId = decoded?.nameid;

  const { cart, totalAmount, clearCart, address } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      userId,
      totalAmount,
    };

    try {
      const response = await createOrder(orderData);
      console.log("Order created successfully", response.data);
      clearCart();
      setOrderPlaced(true);
    } catch (err) {
      console.error("Error creating order:", err);
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <Box textAlign="center" mt={8}>
        <Typography variant="h4" color="green" gutterBottom>
          Thank You for Your Order!
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={2}>
          Your order has been placed successfully.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => navigate("/")}
          sx={{ mt: 3, px: 4 }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 5, pb: 5 }}>
      <Typography variant="h4" color="green" align="center" gutterBottom>
        Complete Your Order
      </Typography>

      <Typography variant="h6" color="green" gutterBottom>
        Order Summary
      </Typography>

      <Grid container spacing={3}>
        {cart.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                boxShadow: 4,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {product.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Quantity: {product.quantity}
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ fontWeight: "bold" }}
                >
                  Price: {product.price * product.quantity} SAR
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h6"
        align="center"
        sx={{ fontWeight: "bold", color: "green" }}
      >
        Total Amount: {totalAmount} SAR
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        gutterBottom
        sx={{ mb: 2 }}
      >
        Delivery Address: {address}
      </Typography>

      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} color="inherit" />}
          sx={{
            px: 5,
            mx: 2,
            backgroundColor: "green",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
        >
          {loading ? "Processing..." : "Complete Order"}
        </Button>

        <Button
          variant="outlined"
          color="success"
          size="large"
          onClick={() => navigate("/cart")}
          sx={{
            px: 5,
            mx: 2,
            borderColor: "green",
            color: "green",
            "&:hover": { backgroundColor: "rgba(0,128,0,0.1)" },
          }}
        >
          Back to Cart
        </Button>
      </Box>
    </Container>
  );
};
