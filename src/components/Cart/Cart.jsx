import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { useCart } from "../../hooks/useCart";

export const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, totalAmount, setTotalAmount, address, setAddress } = useCart();

  const [addressEditing, setAddressEditing] = useState(false);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  setTotalAmount(totalPrice);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressUpdate = () => {
    setAddressEditing(false);
  };

  const increaseQuantity = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    if (item) {
      updateQuantity(productId, item.quantity + 1);
    }
  };

  const decreaseQuantity = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    if (item && item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  const handleCreateOrder = async () => {
    navigate("/dashboard/user/createOrder");
  };

  return (
    <Box padding={3} sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "green", fontWeight: "bold", textAlign: "center" }}>
        Your Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: Cart Items */}
        <Grid item xs={12} md={8}>
          {cart.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", color: "gray" }}>
              Your cart is empty
            </Typography>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": { backgroundColor: "darkgreen" },
                  marginBottom: 2,
                }}
                onClick={clearCart}
              >
                Clear Cart
              </Button>

              {cart.map((item) => (
                <Card
                  sx={{
                    display: "flex",
                    marginBottom: 2,
                    padding: 2,
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                  key={item.productId}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 120,
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      paddingLeft: 2,
                      flex: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
                      <IconButton
                        onClick={() => decreaseQuantity(item.productId)}
                        sx={{ color: "green" }}
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="body2" sx={{ margin: "0 8px" }}>
                        Quantity: {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => increaseQuantity(item.productId)}
                        sx={{ color: "green" }}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <IconButton
                      onClick={() => removeFromCart(item.productId)}
                      sx={{ marginTop: 2, color: "red" }}
                    >
                      <Delete />
                    </IconButton>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </Grid>

        {/* Right Column: Summary and Address */}
        <Grid item xs={12} md={4}>
          {cart.length > 0 && (
            <Box
              sx={{
                padding: 2,
                border: "1px solid #ddd",
                borderRadius: 2,
                backgroundColor: "white",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2, color: "green" }}>
                Order Summary
              </Typography>
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: "bold", color: "green" }}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  "&:hover": { backgroundColor: "darkgreen" },
                  marginTop: 2,
                  width: "100%",
                }}
                onClick={handleCreateOrder}
              >
                Order Now
              </Button>

              {/* Address Update Section */}
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
                  Shipping Address
                </Typography>
                {addressEditing ? (
                  <Box sx={{ marginTop: 2 }}>
                    <TextField
                      fullWidth
                      label="Enter your address"
                      value={address}
                      onChange={handleAddressChange}
                      variant="outlined"
                      sx={{ marginBottom: 2 }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "green",
                        color: "white",
                        "&:hover": { backgroundColor: "darkgreen" },
                      }}
                      onClick={handleAddressUpdate}
                    >
                      Update Address
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      {address || "No address provided yet"}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "green",
                        color: "green",
                        marginTop: 1,
                        "&:hover": {
                          borderColor: "darkgreen",
                          color: "darkgreen",
                        },
                      }}
                      onClick={() => setAddressEditing(true)}
                    >
                      Edit Address
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
