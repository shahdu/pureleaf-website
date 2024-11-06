import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export const Home = () => {
  return (
    <Box className="home-page" sx={{ backgroundColor: '#e0f7e9', minHeight: '100vh', padding: 2 }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
            Welcome to LeafLoom
          </Typography>
        </Box>
        <Box textAlign="center">
          <Typography variant="h6" paragraph sx={{ color: '#2f6a4e', fontSize: '1.25rem' }}>
            At LeafLoom, we offer a carefully curated selection of sustainable and eco-friendly products designed to
            help you make a positive impact on the environment. Every product is crafted with nature in mind, ensuring
            that your choices contribute to a greener planet.
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: '#2f6a4e', fontSize: '1.25rem' }}>
            Join us on our journey towards a more sustainable lifestyle, and let's create a brighter future together,
            one product at a time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};


