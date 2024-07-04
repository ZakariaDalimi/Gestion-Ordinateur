import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sum from './Testing/Sum';
import Counters from './Lifecycle/Counter';
import Navigated from './Counter/Navigate';
import Crud from './Crud/Crud';
import Navigate from './Ordinateur/Navigate';
// import Nav from './Rapel/Navigate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Name /> */}
    {/* <Counters /> */}
    {/* <Navigated /> */}
    {/* <Crud /> */}
    <Navigate />
    {/* <Nav /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
