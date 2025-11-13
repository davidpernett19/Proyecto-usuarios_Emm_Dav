import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './feid.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrearUsuario from './CrearUsuario'; // ✅ Importamos la página de crear usuario

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página principal (Login + CRUD) */}
        <Route path="/" element={<App />} />

        {/* Página de crear usuario */}
        <Route path="/crear" element={<CrearUsuario />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Métricas opcionales
reportWebVitals();
