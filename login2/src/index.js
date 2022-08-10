import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Expenses from "./components/Modal/modalFormRegistro";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Registro" element={<Expenses />} />
      <Route path="Home" element={<App />} />
    </Routes>
  </BrowserRouter>
);