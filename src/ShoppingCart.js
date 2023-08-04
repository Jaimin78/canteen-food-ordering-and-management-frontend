import React, { useState } from 'react';
import Navigation from '../src//Navigation';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1, image: 'pizza.jpg' },
    { id: 2, name: 'Product 2', price: 20, quantity: 1, image: 'pizza.jpg' },
    { id: 3, name: 'Product 3', price: 15, quantity: 1, image: 'pizza.jpg' }
  ]);

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Navigation />
      <div className="w-100">
          <div className="title">Your Shopping Cart</div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-3">
            {cartItems.map(item => (
              <div key={item.id} className="col-md-2 mb-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="btn btn-danger mt-3" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p>Total: ${calculateTotal()}</p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default ShoppingCart;
