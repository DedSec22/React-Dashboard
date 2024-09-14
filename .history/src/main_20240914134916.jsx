import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);