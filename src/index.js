import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './index.css';
import HomePage from './Landing_page/home/HomePage';
import Signup from './Landing_page/signup/Signup';
import AboutPage from './Landing_page/about/AboutPage';
import PricingPage from './Landing_page/pricing/PricingPage';
import ProductsPage from './Landing_page/products/ProductsPage'
import SupportPage from './Landing_page/support/SupportPage'
import Footer from './Landing_page/Footer';
import Navbar from './Landing_page/Navbar';
import NotFound from './Landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/pricing" element={<PricingPage/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/support" element={<SupportPage/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
 </BrowserRouter>
);

