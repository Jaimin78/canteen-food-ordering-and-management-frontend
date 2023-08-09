import React, { useContext, useState, useEffect } from 'react';
import Navigation from '../src/Navigation';
import { Globaldata } from '../src/App';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(Globaldata);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem('user'));
    setOrder({
      customerid: userDetails._id,
      customerName: userDetails.name,
      customerEmail: userDetails.email,
      customerNumber: userDetails.mobile,
      total: calculateTotal(),
      orderDetails: orderCalculation()
    })
  }, [cart]);

  const orderCalculation = () => {
    const uniqueItems = {};

    cart.forEach(item => {
      if (!uniqueItems[item._id]) {
        uniqueItems[item._id] = {
          name: item.name,
          price: item.price,
          category: item.category,
          image: item.image,
          quantity: 1
        };
      } else {
        uniqueItems[item._id].quantity += 1;
      }
    });

    const uniqueItemsArray = Object.values(uniqueItems);

    return uniqueItemsArray;
  }


  const checkout = () => {
    console.log(order)
  }

  const removeItem = (index) => {
    // Remove the item at the given index from cartData
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemTotal = item.price * (item.quantity || 1); // Default quantity to 1 if not defined
      return total + itemTotal
    }, 0);
  };

  return (
    <>
      <Navigation />
      <div className="w-100 overflow-auto">
        <div className="title">Your Order Cart</div>
        <div className="container">
          <div className="row d-flex justify-content-center m-4">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="col-md-2 mb-4">
                  <div className="card h-100">
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      className="card-img-top h-100"
                      alt={item.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Price: ₹{item.price}</p>
                      <div className="d-flex align-items-center">
                        {/* Update quantity and remove item buttons */}
                      </div>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={() => removeItem(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 style={{ textAlign: 'center' }}>Cart is empty</h1>
            )}
          </div>
          {cart.length > 0 ? (
            <div className="text-center mt-4">
              <p>Total: ₹{calculateTotal()}</p>
              <button className="btn btn-primary" onClick={checkout}>Checkout</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
