// src/components/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: 300, description: 'Description of Product 3' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
