import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

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
import { Add, Remove, Delete } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { useCart } from "../../hooks/useCart";
export const Cart = () => {
  const { cart, removeFromCart, clearCart , updateQuantity,totalAmount, setTotalAmount,address, setAddress } = useCart();
  
  // Track address state
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
    // Handle Order Creation
    const handleCreateOrder = async () => {
      navigate("/dashboard/user/createOrder");
    };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: Cart Items */}
        <Grid size={{ xs: 12, md: 8 }}>
          {cart.length === 0 ? (
            <Typography variant="h6">Your cart is empty</Typography>
          ) : (
            <>
              {/* Clear Cart Button at the top */}
              <Button
                variant="contained"
                color="primary"
                onClick={clearCart}
                sx={{ marginBottom: 2 }}
              >
                Clear Cart
              </Button>

              {cart.map((item) => (
                <Card
                  sx={{ display: 'flex', marginBottom: 2, padding: 2 }}
                  key={item.productId}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: 120,
                      height: 120,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                    image={item.image} // assuming `item.image` contains the image URL
                    alt={item.name}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      paddingLeft: 2,
                      flex: 1,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    {/* Quantity Control */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: 1,
                      }}
                    >
                      <IconButton
                        onClick={() => decreaseQuantity(item.productId)}
                        color="primary"
                        size="small"
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="body2" sx={{ margin: '0 8px' }}>
                        Quantity: {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => increaseQuantity(item.productId)}
                        color="primary"
                        size="small"
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    {/* Remove Button with Icon */}
                    <IconButton
                      variant="contained"
                      color="error"
                      onClick={() => removeFromCart(item.productId)}
                      sx={{ marginTop: 2, alignSelf: 'flex-start' }}
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
        <Grid size={{ xs: 12, md: 4 }}>
          {cart.length > 0 && (
            <Box sx={{ padding: 2, border: '1px solid #ddd', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Order Summary
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
        
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={handleCreateOrder}
              >
                 Order Now
              </Button>

              {/* Address Update Section */}
              <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
                      color="primary"
                      onClick={handleAddressUpdate}
                    >
                      Update Address
                    </Button>
                  </Box>
                ) : (
                  <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">
                      {address || 'No address provided yet'}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginTop: 1 }}
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

