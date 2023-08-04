import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/Login';
import Register from '../src/Register';
import Home from '../src/Home';
import OrderStatus from '../src/OrderStatus';
import PrivateComponent from '../src/PrivateComponent';
import ShoppingCart from '../src/ShoppingCart';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path='/' element={<Home />} />
          <Route path='/status' element={<OrderStatus />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
