import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { UserSidebar } from './UserSidebar';

export const UserDashboard = () => {
  return (
    <Box display="flex">
      <UserSidebar />
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

