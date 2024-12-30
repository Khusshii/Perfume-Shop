import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () =>{
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get('/api/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));

    }, []);

    return(
        <div className="homepage">
      <div className="banner">
        <h2>Discover Our Latest Perfumes</h2>
        <button>Explore Collection</button>
      </div>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
   
export default HomePage;
