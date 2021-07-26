import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProviderRegistro} from './context/registroContext';
import {ProviderAdmin} from './context/AdminContextRegister';

ReactDOM.render(
  <React.StrictMode>
    <ProviderRegistro>
      <ProviderAdmin>
        <App />
      </ProviderAdmin>
    </ProviderRegistro>
  </React.StrictMode>,
  document.getElementById('root')
);
