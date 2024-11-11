import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Paper, Grid } from '@mui/material';

const ImageUploadWithPreview = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);  
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!image || !name || !description || !price) {
      alert('Please fill all the fields and upload an image');
      return;
    }
    onImageChange(imagePreview, name, description, price); 
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setImagePreview(null);
  };

  return (
    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
      <Button
        variant="outlined"
        onClick={() => setShowUploadForm(!showUploadForm)}
        sx={{ marginBottom: 2 }}
      >
        {showUploadForm ? 'Hide Upload Form' : 'Show Upload Form'}
      </Button>

      {showUploadForm && (
        <>
          <Typography variant="h6" gutterBottom>Upload a New Product</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginBottom: 1, width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginBottom: 1, width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                sx={{ marginBottom: 1, width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                type="file"
                onChange={handleImageUpload}
                sx={{ marginBottom: 2, width: '100%' }}
              />
            </Grid>
          </Grid>

          {imagePreview && (
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', marginBottom: 2 }}>
              <Box sx={{ marginBottom: 2 }}>
                <img
                  src={imagePreview}
                  alt="Uploaded preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px',
                    objectFit: 'cover',
                    marginBottom: '10px',
                  }}
                />
              </Box>
            </Paper>
          )}

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ marginTop: 2 }}
          >
            Add Product
          </Button>
        </>
      )}
    </Box>
  );
};

export default ImageUploadWithPreview;
