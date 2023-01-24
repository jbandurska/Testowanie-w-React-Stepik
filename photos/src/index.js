import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ColorProvider from './ColorProvider.js';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <ColorProvider>
      <App />
    </ColorProvider>
  </Router>
);
