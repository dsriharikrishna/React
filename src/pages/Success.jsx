import React from 'react';
import { Box, Button, Card, CardContent, CardActions, Typography } from '@mui/material';

const Success = () => {
  return (
    <Box sx={{marginTop:'10px'}}>
    <Card sx={{ maxWidth: 400, margin: 'auto', padding: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Order Placed Successfully!
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
          Thank you for your purchase! Your order is being processed and will be shipped soon.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" href="/">Home</Button>
        <Button variant="standard" color="secondary" href="/shop">Shop More</Button>
      </CardActions>
    </Card>
    </Box>
  );
};

export default Success;
