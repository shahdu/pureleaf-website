import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'; 
import { Link } from 'react-router-dom';

// UserSidebar Component
export const UserSidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        borderRight: '1px solid #ddd',
        height: '100vh',
        padding: 2,
      }}
    >
      <List>
        <ListItemButton component={Link} to="/dashboard/user">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="User Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
        <ListItemButton component={Link} to="UserOrders">
          <ListItemIcon>
            <ShoppingCartCheckoutIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </List>
    </Box>
  );
};

