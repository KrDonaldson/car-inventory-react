import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Inventory, About, ContactUs } from './components'
import './styles.css';

const temp_props = "Car Inventory - React App"

ReactDom.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home title={ temp_props } /> } />
          <Route path='/inventory' element={<Inventory /> } />
          <Route path='/contact-us' element={<ContactUs /> } />
          <Route path='/about' element={<About /> } />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);