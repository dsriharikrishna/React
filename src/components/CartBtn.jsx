import React from 'react';
import Button from '@mui/material/Button';

const CartBtn = ({ onAddToCart }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onAddToCart}
      sx={{ marginTop: 2 }}
    >
      Add to Cart
    </Button>
  );
};


export default CartBtn;
