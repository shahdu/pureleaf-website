import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  TextField,
} from "@mui/material";
import { useCart } from "../../hooks/useCart";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Track address state
  const [address, setAddress] = useState("");
  const [addressEditing, setAddressEditing] = useState(false);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressUpdate = () => {
    setAddressEditing(false);
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        cart.map((item) => (
          <Card
            sx={{ display: "flex", marginBottom: 2, padding: 2 }}
            key={item.productId}
          >
            {/* Product Image */}
            <CardMedia
              component="img"
              sx={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: 1,
              }}
              image={item.image} // assuming `item.image` contains the image URL
              alt={item.name}
            />
            {/* Product Details */}
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingLeft: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography variant="body2">
                Price: ${item.price.toFixed(2)}
              </Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
              <Box sx={{ marginTop: "auto" }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeFromCart(item.productId)}
                  sx={{ marginTop: 1 }}
                >
                  Remove
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      )}

      {/* Total Price */}
      {cart.length > 0 && (
        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold" }}>
          Total Price: ${totalPrice.toFixed(2)}
        </Typography>
      )}

      {/* Clear Cart Button */}
      {cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={clearCart}
          sx={{ marginTop: 2 }}
        >
          Clear Cart
        </Button>
      )}

      {/* Payment Option Button */}
      {cart.length > 0 && (
        <Button variant="contained" color="success" sx={{ marginTop: 2 }}>
          Proceed to Payment
        </Button>
      )}

      {/* Address Update Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
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
              {address || "No address provided yet"}
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
  );
};
