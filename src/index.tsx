import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { setConfiguration } from 'react-grid-system';
setConfiguration({ maxScreenClass: 'xl' });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
