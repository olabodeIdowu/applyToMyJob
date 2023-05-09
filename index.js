import React from 'react';
import './index.css';
import './queries.css';
import { createRoot } from 'react-dom/client';
import App from './app';
import { StrictMode } from 'react';
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
