import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/Login';
import Register from '../src/Register';
import Home from '../src/Home';
import Navigation from '../src/Navigation';

function App() {
  return (
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
