import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/PureLeaf.jpg';
import hommpage from '../../assets/Images/hommpage.png';

export const Home = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/productsList');
  };

  return (
    <Box
      className="home-page"
      sx={{
        backgroundImage: `url(${hommpage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', bgcolor: 'rgba(0, 0, 0, 0.6)', borderRadius: '10px', padding: 4 }}>
       
        {/* Welcome Section */}
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to PureLeaf
        </Typography>

        {/* Description */}
        <Typography variant="h6" paragraph sx={{ fontSize: '1.25rem', mb: 2 }}>
          At PureLeaf, we offer a carefully curated selection of sustainable and eco-friendly products designed to help you make a positive impact on the environment.
        </Typography>
        <Typography variant="h6" paragraph sx={{ fontSize: '1.25rem', mb: 4 }}>
          Join us on our journey towards a more sustainable lifestyle, and let's create a brighter future together, one product at a time.
        </Typography>

        {/* Call to Action */}
        <Button
          variant="contained"
          color="success"
          onClick={handleStartShopping}
          sx={{
            fontWeight: 'bold',
            borderRadius: '30px',
            textTransform: 'none',
            padding: '10px 20px',
            fontSize: '1.1rem',
            bgcolor: '#388E3C',
            '&:hover': {
              backgroundColor: '#2E7D32',
            },
          }}
        >
          Start Shopping
        </Button>
      </Container>
    </Box>
  );
};
