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
  const [orderPlaced, setOrderPlaced] = useState(false); // New state for thank-you message

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
      clearCart(); // Clear cart after successful order creation
      setOrderPlaced(true); // Show thank-you message
    } catch (err) {
      console.error("Error creating order:", err);
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    // Render thank-you message after placing the order
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" color="green" gutterBottom>
          Thank You for Your Order!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Your order has been placed successfully.
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={() => navigate("/")}
          sx={{ mt: 3, mx: 2 }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" color="green" align="center" gutterBottom>
        Complete Your Order
      </Typography>

      <Typography variant="h6" color="green" gutterBottom>
        Order Products
      </Typography>

      <Grid container spacing={3}>
        {cart.map((product, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2">
                  Quantity: {product.quantity}
                </Typography>
                <Typography variant="body2">
                  Price: {product.price * product.quantity} SAR
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" align="center">
        Total Amount: <span style={{ color: "green" }}>{totalAmount} SAR</span>
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Delivery Address: {address}
      </Typography>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="success"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
          startIcon={loading && <CircularProgress size={20} color="inherit" />}
          sx={{ mx: 2 }}
        >
          {loading ? "Processing..." : "Complete Order"}
        </Button>

        <Button
          variant="outlined"
          color="success"
          size="large"
          onClick={() => navigate("/cart")}
          sx={{ mx: 2 }}
        >
          Back to Cart
        </Button>
      </div>
    </div>
  );
};
