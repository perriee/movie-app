import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { MoviesPage } from './pages/MoviesPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoviesPage />
  </React.StrictMode>
);
