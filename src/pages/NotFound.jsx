import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <Typography variant="h2" sx={{ color: 'red', fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ color: 'darkgray', fontWeight: '500', textAlign: 'center', marginBottom: 3 }}>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" href="/" sx={{ marginTop: 2 }}>
        Go Home
      </Button>
    </Box>
  );
};

export default NotFound;
