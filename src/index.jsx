//import '../node_modules/@font-awesome/css/font-awesome.min.css'
//import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
//import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/all';
import './styles/index.scss';
import './styles/index.css';


import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from './components/ProgressBar';





ReactDOM.render(
  <div>
   
    <h1>Hello, world!</h1>
  </div>,
  document.getElementById("app"));




if(module.hot) {
  module.hot.accept();
}