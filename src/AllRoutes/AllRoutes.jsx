import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartt from '../pages/Cartt';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import NavBar from '../components/NavBar';
import NotFound from '../pages/NotFound'; 
import { useCart } from "react-use-cart";
import Success from '../pages/Success';
import { CartProvider } from 'react-use-cart'; 

const AllRoutes = () => {
  const { totalUniqueItems } = useCart();  
  return (
      <BrowserRouter>
        <CartProvider>
          
          <NavBar totalUniqueItems={totalUniqueItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cartt" element={<Cartt />} />
            <Route path="/Success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default AllRoutes;
