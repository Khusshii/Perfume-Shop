import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
