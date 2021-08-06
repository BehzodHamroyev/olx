import './Product.css';
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const { id } = useParams();
  console.log( id);
  return <div className="Product">
      <h1>salom</h1>
  </div>;
};

export default Product;
