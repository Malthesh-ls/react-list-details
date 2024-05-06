import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppContext from './context/context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <AppContext>
    <App />
  </AppContext>,
);