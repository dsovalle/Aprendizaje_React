import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Formulario from "./components/Modal/modalFormRegistro";
import Login from "./components/Modal/modalLogin";

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
      <Route path="Registro" element={<Formulario />} />
      <Route path="Home" element={<App />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);