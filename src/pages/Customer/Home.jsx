import React from 'react'; 
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/PureLeaf.jpg'; // Adjust the path to your logo

export const Home = () => {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/productsList');
  };

  return (
    <Box
      className="home-page"
      sx={{
        minHeight: '100vh',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Align to the top
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        {/* Logo and Name at the top */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, mt: 4 }}>
          <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: '#388E3C', 
              fontWeight: 'bold', 
              fontFamily: 'Roboto, sans-serif',
              letterSpacing: '2px',
            }}
          >
          </Typography>
        </Box>

        {/* Welcome Section */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" sx={{ color: '#2E7D32', fontWeight: 'bold' }}>
            Welcome to PureLeaf
          </Typography>
        </Box>

        {/* Description */}
        <Box textAlign="center">
          <Typography variant="h6" paragraph sx={{ color: '#2f6a4e', fontSize: '1.25rem', mb: 2 }}>
            At PureLeaf, we offer a carefully curated selection of sustainable and eco-friendly products designed to
            help you make a positive impact on the environment. Every product is crafted with nature in mind, ensuring
            that your choices contribute to a greener planet.
          </Typography>
          <Typography variant="h6" paragraph sx={{ color: '#2f6a4e', fontSize: '1.25rem', mb: 4 }}>
            Join us on our journey towards a more sustainable lifestyle, and let's create a brighter future together,
            one product at a time.
          </Typography>
        </Box>

        {/* Call to Action */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleStartShopping} // Navigate on click
            sx={{
              fontWeight: 'bold',
              borderRadius: '30px',
              textTransform: 'none',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#2E7D32',
              },
            }}
          >
            Start Shopping
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
