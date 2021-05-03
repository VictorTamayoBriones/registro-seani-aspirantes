import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProviderRegistro} from './context/registroContext';
ReactDOM.render(
  <React.StrictMode>
    <ProviderRegistro>
      <App />
    </ProviderRegistro>
  </React.StrictMode>,
  document.getElementById('root')
);
