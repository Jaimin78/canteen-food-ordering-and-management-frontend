import './App.css';
import React, {useState, createContext} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/Login';
import Register from '../src/Register';
import Home from '../src/Home';
import OrderStatus from '../src/OrderStatus';
import PrivateComponent from '../src/PrivateComponent';
import ShoppingCart from '../src/ShoppingCart';

// Create a context
export const Globaldata = createContext();

function App() {

  const [cart, setCart] = useState([]);

  return (
    <Globaldata.Provider value={{cart, setCart}} >
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
    </Globaldata.Provider >
  );
}

export default App;
