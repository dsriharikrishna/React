import React, { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';


const Fetching = ({ itemName, itemDescription }) => {
  
  useEffect(() => {
    axios.post("YOUR_API_ENDPOINT", {
      title: itemName,
      body: itemDescription
    })
    .then(response => {
      console.log("Checkout successful:", response.data);
      toast.success("Checkout successful");
    })
    .catch(error => {
      console.error("Checkout failed:", error);
      toast.error("Checkout process failed. Please try again.");
    });
  }, [itemName, itemDescription]);

  return (
    <div>
      <CircularProgress />
      <p>Loading...</p>
    </div>
  );
}

export default Fetching;
