import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import PeopleIcon from '@mui/icons-material/People';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { Link } from 'react-router-dom';

// AdminSidebar Component
export const AdminSidebar = () => {
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
        <ListItemButton component={Link} to="/dashboard/admin">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Admin Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="categories">
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
        <ListItemButton component={Link} to="users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
        <ListItemButton component={Link} to="products">
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="products" />
        </ListItemButton>
        <ListItemButton component={Link} to="DataAnalytics">
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="DataAnalytics" />
        </ListItemButton>
      </List>
    </Box>
  );
};

