import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './assets/styles/index.scss';
import reportWebVitals from './utils/reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
