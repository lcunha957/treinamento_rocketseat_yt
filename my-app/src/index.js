import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Upload from './components/Upload';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Upload/>
    <App />
  </React.StrictMode>
);

