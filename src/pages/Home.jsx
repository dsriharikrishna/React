import React from 'react';
import img from '../assets/bg.jpg';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box 
      sx={{
        margin:'auto',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', 
        width: '100%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <h1>Welcome to Our Shop!</h1>
    </Box>
  );
};

export default Home;
