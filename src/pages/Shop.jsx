import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, IconButton, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'react-use-cart';
import CartBtn from '../components/CartBtn';
import ImageUploadWithPreview from '../components/ImageUploadAndAddItem';
import img1 from '../assets/apple.jpg'; 
import img2 from '../assets/bananas.jpg';
import img3 from '../assets/mango.jpeg';

const Shop = () => {
  const { addItem, totalItems } = useCart();

  // Static initial products
  const initialProducts = [
    { id: 1, name: 'Apple', price: 20.00, image: img1, description: 'Fresh red apples' },
    { id: 2, name: 'Mango', price: 25.99, image: img3, description: 'Sweet tropical mangoes' },
    { id: 3, name: 'Bananas', price: 30.99, image: img2, description: 'Organic ripe bananas' },
  ];

  const [products, setProducts] = useState(initialProducts);

  const addToCart = (product) => {
    addItem(product);
    toast.success("Item Added to Cart Successfully!");
  };

  const handleNewProduct = (imagePreview, name, description, price) => {
    if (!imagePreview || !name || !description || !price) {
      toast.error('Please fill all fields and upload an image.');
      return;
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      image: imagePreview,  
      description,
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    toast.success("Item Added Successfully to Shop");
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Shop</h1>
      <ToastContainer position="top-center" autoClose={3000} />

      <Box sx={{ margin: '0px', justifyContent: 'center', display: 'flex' }}>
        <ImageUploadWithPreview onImageChange={handleNewProduct} />
      </Box>

      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
                <h2>{product.name}</h2>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold', mb: 1 }}>
                  ${product.price.toFixed(2)} rs
                </Typography>
                <CartBtn onAddToCart={() => addToCart(product)} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <IconButton
        component={Link}
        to="/Cart"
        color="inherit"
        aria-label="cart"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Badge badgeContent={totalItems} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};

export default Shop;
