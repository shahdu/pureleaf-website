import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Outlet } from 'react-router-dom';
  
import { AdminSidebar } from './AdminSidebar';

 export const AdminDashboard = () => {
  return (
    <Box display="flex">
      <AdminSidebar />
      <Container>
        <Typography variant="h4" gutterBottom>
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

