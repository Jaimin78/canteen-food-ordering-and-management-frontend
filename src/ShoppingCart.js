import React, { useContext } from 'react';
import Navigation from '../src/Navigation';
import { Globaldata } from '../src/App';

const ShoppingCart = () => {
  const cart = useContext(Globaldata);

  
  const updateQuantity = (id, newQuantity) => {
    // Implement your updateQuantity function logic here
  };

  const removeItem = (id) => {
    // Implement your removeItem function logic here
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * (item.quantity || 1); // Default quantity to 1 if not defined
      return total + itemTotal;
    }, 0);
  };
  

  return (
    <>
      <Navigation />
      <div className="w-100">
        <div className="title">Your Shopping Cart</div>
        <div className="container">
          <div className="row d-flex justify-content-center mt-3">
            {cart.map(item => (
              <div key={item.id} className="col-md-2 mb-4">
                <div className="card">
                  <img src={`http://localhost:5000/uploads/${item.image}`} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <div className="d-flex align-items-center">
                      {/* Update quantity and remove item buttons */}
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
