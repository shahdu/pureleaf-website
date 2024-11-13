import React from 'react';
import { Badge, IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useCart } from '../../hooks/useCart';


 export const CartIcon = () => {
  const { cart } = useCart();

  // Get the total number of items in the cart
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={itemCount} color="error">
      <LocalMallIcon sx={{ color: 'green' }} />
      </Badge>
    </IconButton>
  );
};

