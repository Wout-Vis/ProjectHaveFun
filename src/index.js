import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Counters from './Counters';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counters />
  </React.StrictMode>,
  document.getElementById('root')
);
