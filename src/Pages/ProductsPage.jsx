import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/productsReducer'; 

function ProductsPage({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addToCart(productId));
  };


  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products && products.map(product => (
          <li key={product._id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button onClick={() => handleAddToCart(product._id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;