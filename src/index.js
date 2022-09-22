import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextDataProvider from './Context/ContextDataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </React.StrictMode>
);
