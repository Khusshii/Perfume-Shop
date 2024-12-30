import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));

    axios.get(`/api/reviews/${id}`)
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [id]);

  return (
    product && (
      <div className="product-page">
        <h1>{product.name}</h1>
        <div className="product-details">
          <p>{product.description}</p>
          <p>${product.price}</p>
          {/* Image Gallery */}
          <div className="gallery">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={product.name} />
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="reviews">
          <h2>Reviews</h2>
          {reviews.map((review, index) => (
            <p key={index}>{review.text}</p>
          ))}
        </div>

        {/* Share Button */}
        <button onClick={() => alert('Share on social media!')}>Share</button>
      </div>
    )
  );
};

export default ProductPage;
