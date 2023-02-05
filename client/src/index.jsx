import React from "react";
import { render, createRoot } from "react-dom";
import App from './components/App.jsx'
import './css/App.css';

render(
  <App className='app'/>,
  document.getElementById('root')
);