import React from 'react';
import { useCart } from "react-use-cart";
import { Box, Paper, Typography, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import img from '../assets/cart.png';

function Cartt() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,  
  } = useCart();

  const navigate = useNavigate();


  if (isEmpty) {
    return (
      <Box
        sx={{
          marginTop: '10px',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <h1>Your Cart Is Empty!</h1>
      </Box>
    );
  }

  const GST = Math.round(cartTotal * 0.18);
  const totalWithGST = Math.round(cartTotal + GST);

  const handleCheckout = () => {
   
    toast.success('Order placed successfully!');
    emptyCart();  
    navigate('/Success');
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">Cart ({totalUniqueItems} items)</Typography>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item) => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
              <Typography>
                {item.quantity} x {item.name} &mdash; ${item.price.toFixed(2)}
              </Typography>
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ color: 'orange', fontWeight: '600' }}
                  onClick={() => item.quantity > 1 && updateItemQuantity(item.id, item.quantity - 1)}
                >
                  --
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ color: 'green', fontWeight: '600' }}
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  ++
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ color: 'blue', fontWeight: '600' }}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Paper>
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6">Total: ${cartTotal.toFixed(2)} rs</Typography>
        <Typography variant="h6">GST (18%): ${GST} rs</Typography>
        <Typography variant="h6">Total with GST: ${totalWithGST} rs</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 1 }}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </Paper>

      <ToastContainer position="top-center" autoClose={3000} />
    </Box>
  );
}

export default Cartt;
