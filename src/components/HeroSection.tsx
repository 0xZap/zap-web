import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import hero from '../assets/hero.png';


const HeroSection: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '64px' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom color="white" paddingLeft={'120px'} paddingRight={'120px'}>
          Allow anyone to generate ZkProofs to any internet
        </Typography>
        <Box sx={{ margin: '20px 0' }}>
          <img src={hero} alt="Hero" width={1200} height={600}/>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#B0B0B0",
            borderRadius: '20px',
            padding: '10px 30px',
          }}
        >
          Coming Soon
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
